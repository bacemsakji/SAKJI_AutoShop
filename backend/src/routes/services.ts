import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../db';
import { services } from '../db/schema';
import { eq, and, asc } from 'drizzle-orm';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const queryCategory = typeof req.query.category === 'string' ? req.query.category : undefined;

    const results = await db
      .select()
      .from(services)
      .where(
        queryCategory
          ? and(eq(services.isActive, true), eq(services.category, queryCategory))
          : eq(services.isActive, true)
      )
      .orderBy(asc(services.sortOrder));

    res.json({
      data: results.map((s) => ({
        id: s.id,
        name: s.name,
        slug: s.slug,
        category: s.category,
        shortDescription: s.shortDescription,
        description: s.description,
        priceMin: s.priceMin,
        priceMax: s.priceMax,
        estimatedHours: s.estimatedHours,
        iconName: s.iconName,
      })),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
