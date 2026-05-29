import rateLimit from 'express-rate-limit';

// Layer 1 — per-minute burst protection
export const chatMinuteLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      message: 'Too many messages. Please wait a moment before continuing.',
    },
  },
});

// Layer 2 — daily cap per IP
export const chatDailyLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      message: 'Daily message limit reached. Visit the shop or call us directly.',
    },
  },
});
