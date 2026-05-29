import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { z } from 'zod';

import chatRouter from './routes/chat';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables
dotenv.config({ path: '.env' });

// Validate environment variables on startup
const envSchema = z.object({
  PORT: z.string().default('3001'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().url('FRONTEND_URL must be a valid URL').optional(),
  OPENROUTER_API_KEY: z.string().min(10, 'OPENROUTER_API_KEY is missing or invalid'),
});

const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
  console.error('❌ Environment validation failed:', parsedEnv.error.format());
  process.exit(1);
}

const env = parsedEnv.data;

const app = express();
const port = parseInt(env.PORT, 10);

// Basic middleware
app.use(helmet());

// CORS config
const allowedOrigin = env.FRONTEND_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl) or matching the allowedOrigin
      if (!origin || origin === allowedOrigin || allowedOrigin === '*' || origin.startsWith('http://localhost:')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Global Rate Limiting: 100 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: {
      message: 'Too many requests from this IP, please try again later.',
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

// Mount API routes
app.use('/api/chat', chatRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: env.NODE_ENV,
  });
});

// 404 Route handler for API
app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: `Endpoint ${req.method} ${req.originalUrl} not found`,
    },
  });
});

// Global error handler (must be registered last)
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`⚡ SAKJI AutoShop API server listening at http://localhost:${port} in ${env.NODE_ENV} mode`);
});
