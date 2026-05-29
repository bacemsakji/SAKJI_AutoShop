import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export interface AppError extends Error {
  statusCode?: number;
}

export function errorHandler(
  err: Error | AppError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // If headers already sent, delegate to standard Express error handler
  if (res.headersSent) {
    return next(err);
  }

  // Zod Validation Error handling
  if (err instanceof ZodError || (err && (err as any).name === 'ZodError')) {
    const fields: Record<string, string> = {};
    const zodErrors = (err as any).errors || (err as any).issues || [];
    zodErrors.forEach((issue: any) => {
      // Get the path (e.g. ['fullName']) and join if nested
      const path = issue.path ? issue.path.join('.') : 'unknown';
      fields[path] = issue.message;
    });

    res.status(400).json({
      error: {
        message: 'Validation failed',
        fields,
      },
    });
    return;
  }

  // Known App Error / Custom status code handling
  const statusCode = (err as AppError).statusCode || 500;
  const message = statusCode === 500 && process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : err.message || 'An unexpected error occurred';

  // Log non-production errors or severe 500 errors
  if (statusCode === 500) {
    console.error('[Unhandled Server Error]:', err);
  }

  res.status(statusCode).json({
    error: {
      message,
    },
  });
}
