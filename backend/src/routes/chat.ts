import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { validateBody } from '../middleware/validate';
import { chatDailyLimiter, chatMinuteLimiter } from '../middleware/rateLimits';
import { OPENROUTER_API_KEY, OPENROUTER_API_URL, MODEL, SYSTEM_PROMPT } from '../lib/gemini';
import { getCached, setCache } from '../lib/chatCache';

const router = Router();

// Message validation schema
const MessageSchema = z.object({
  role: z.enum(['user', 'model', 'assistant']),
  content: z.string()
    .max(500, 'Message too long — max 500 characters'),
});

const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema)
    .min(1, 'At least one message required')
    .max(10, 'Too many messages in payload'),
});

// Trim conversation history to last 6 messages
function trimHistory(messages: { role: string; content: string }[]) {
  return messages.slice(-6);
}

// Chat handler
async function chatHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { messages } = req.body as {
      messages: { role: 'user' | 'model'; content: string }[];
    };

    const trimmed = trimHistory(messages);
    const lastUserMessage = trimmed[trimmed.length - 1].content;

    // Cache check — skip API call if we have a recent answer
    const cached = getCached(lastUserMessage);
    if (cached) {
      return res.json({ data: { reply: cached, cached: true } });
    }

    // Build OpenRouter-compatible messages array
    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...trimmed.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    // Call OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost:5173',
        'X-Title': 'SAKJI AutoShop',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: apiMessages,
        max_tokens: 300,
        temperature: 0.4,
        top_p: 0.85,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json() as {
      choices: Array<{ message: { content: string } }>;
      usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
      };
    };
    const reply = data.choices[0]?.message?.content || 'No response from AI';

    // Log token usage for monitoring
    console.log(JSON.stringify({
      event: 'openrouter_call',
      promptTokens: data.usage?.prompt_tokens ?? 0,
      outputTokens: data.usage?.completion_tokens ?? 0,
      totalTokens: data.usage?.total_tokens ?? 0,
      ip: req.ip,
      ts: new Date().toISOString(),
    }));

    // Store in cache
    setCache(lastUserMessage, reply);

    return res.json({ data: { reply, cached: false } });
  } catch (error) {
    next(error);
  }
}

// Apply rate limiters: daily first, then minute
router.post(
  '/',
  chatDailyLimiter,
  chatMinuteLimiter,
  validateBody(ChatRequestSchema),
  chatHandler
);

export default router;
