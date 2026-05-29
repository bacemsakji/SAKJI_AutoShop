import crypto from 'crypto';

/**
 * Generates a unique booking reference matching the pattern SKJ-YYYY-[5 character alphanumeric]
 * Example: SKJ-2026-A4F2K
 */
export function generateReference(): string {
  const year = new Date().getFullYear();
  // Generate 5 random alphanumeric characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomPart = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = crypto.randomInt(0, chars.length);
    randomPart += chars.charAt(randomIndex);
  }
  return `SKJ-${year}-${randomPart}`;
}
