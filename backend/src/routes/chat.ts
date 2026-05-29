import { Router, Request, Response, NextFunction } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { validateBody } from '../middleware/validate';

const router = Router();

// Rate limiter for chat endpoint: 10 requests per IP per minute
const chatRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: {
    error: {
      message: 'Too many diagnostic requests. Please wait a minute and try again.',
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// System prompt as specified in the guidelines
const SYSTEM_PROMPT = `You are SAKJI, the AI assistant for SAKJI AutoShop — a professional automotive repair shop.
Your role is to help clients identify potential issues with their vehicles based on the symptoms they describe.

BEHAVIOR RULES:
- Be professional, clear, and concise. Do not be overly casual.
- Ask one clarifying question at a time if needed to narrow down the diagnosis.
- Provide a likely cause or list of causes for the symptom described.
- Classify urgency as one of: CRITICAL (stop driving, tow if needed), MODERATE (schedule within the week), ROUTINE (next service is fine).
- Always recommend the client visit the shop for a proper inspection — you are an assistant, not a substitute for a mechanic.
- If the issue sounds dangerous (brake failure, smoke, steering loss), explicitly tell the user to stop driving immediately.
- Do not discuss topics unrelated to vehicles and automotive repair.
- Do not mention competitor shops or services.
- Keep responses under 200 words unless a detailed explanation is necessary.
- Format your response clearly: start with the likely issue, then urgency, then recommendation.
- If the user greets you or asks who you are, introduce yourself briefly and ask what car problem they need help with.

Shop services available: Engine Diagnostics, Oil Change, Brake Service, Electrical System Repair, Tire Mounting & Balancing, Air Conditioning Service, Suspension & Steering, Battery Replacement, Transmission Service, Body & Paint Work.`;

// Message validation schema
const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1, 'Message content cannot be empty'),
});

const chatSchema = z.object({
  messages: z.array(messageSchema).min(1, 'At least one message is required'),
});

router.post('/', chatRateLimit, validateBody(chatSchema), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { messages } = req.body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Mock/fallback response if API key is not configured for development
      console.warn('WARNING: ANTHROPIC_API_KEY is not set. Using dry-run diagnostic response.');
      
      const lastUserMsg = messages[messages.length - 1]?.content || '';
      
      let reply = '';
      if (lastUserMsg.toLowerCase().includes('brake') || lastUserMsg.toLowerCase().includes('grind')) {
        reply = `**Likely Issue:** Worn brake pads grinding against the brake rotors.\n\n**Urgency:** CRITICAL. Operating a vehicle with severely degraded brake pads compromises your stopping distance and safety.\n\n**Recommendation:** Please stop driving immediately or proceed with absolute caution directly to SAKJI AutoShop. We recommend booking our **Brake Service** for a complete pad and rotor replacement.`;
      } else {
        reply = `**Likely Issue:** General mechanical or sensor reading issue based on "${lastUserMsg}".\n\n**Urgency:** MODERATE. We recommend scheduling an inspection within the week.\n\n**Recommendation:** Book our **Engine Diagnostics** service at SAKJI AutoShop so we can plug in our scan tools and inspect the physical components.`;
      }

      // Add a brief lag to simulate API request
      await new Promise((resolve) => setTimeout(resolve, 800));

      res.json({ data: { reply } });
      return;
    }

    const client = new Anthropic({ apiKey });

    // Keep the last 10 messages for context, mapping to Anthropic API formats if needed
    const apiMessages = messages.slice(-10).map((msg: { role: string; content: string }) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));

    const response = await client.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: apiMessages,
    });

    const reply = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    res.json({ data: { reply } });
  } catch (error) {
    next(error);
  }
});

export default router;
