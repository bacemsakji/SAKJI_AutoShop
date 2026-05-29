import { Router } from 'express';
import { db } from '../db';
import { testimonials } from '../db/schema';
import { eq, desc } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isVisible, true))
      .orderBy(desc(testimonials.createdAt))
      .limit(20);

    res.json({
      data: results.map((t) => ({
        id: t.id,
        clientName: t.clientName,
        carModel: t.carModel,
        rating: t.rating,
        comment: t.comment,
      })),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
