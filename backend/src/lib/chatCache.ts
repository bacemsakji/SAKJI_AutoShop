import crypto from 'crypto';

interface CacheEntry {
  reply: string;
  ts: number;
}

const cache = new Map<string, CacheEntry>();
const TTL_MS = 60 * 60 * 1000;      // 1 hour
const MAX_ENTRIES = 500;              // prevent unbounded memory growth

export function getCached(lastMessage: string): string | null {
  const key = hashMessage(lastMessage);
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > TTL_MS) {
    cache.delete(key);
    return null;
  }
  return entry.reply;
}

export function setCache(lastMessage: string, reply: string): void {
  if (cache.size >= MAX_ENTRIES) {
    // evict oldest entry
    const oldestKey = cache.keys().next().value;
    if (oldestKey) cache.delete(oldestKey);
  }
  cache.set(hashMessage(lastMessage), { reply, ts: Date.now() });
}

function hashMessage(text: string): string {
  return crypto
    .createHash('md5')
    .update(text.toLowerCase().trim())
    .digest('hex');
}
