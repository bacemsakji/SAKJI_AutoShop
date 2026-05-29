import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../db';
import { appointments, services } from '../db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { validateBody } from '../middleware/validate';
import { generateReference } from '../utils/refGenerator';

const router = Router();

// Zod schema for appointment creation
const createAppointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(120, 'Name must not exceed 120 characters'),
  phone: z
    .string()
    .regex(
      /^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/,
      'Phone number must be in Tunisian format: +216 XX XXX XXX'
    ),
  carBrand: z.enum(['Opel', 'Ford'], {
    message: 'Car brand must be Opel or Ford',
  }),
  carModel: z
    .string()
    .min(1, 'Car model is required')
    .max(60, 'Car model must not exceed 60 characters'),
  carYear: z
    .number()
    .int()
    .min(1990, 'Year must be 1990 or later')
    .max(new Date().getFullYear(), `Year cannot exceed ${new Date().getFullYear()}`),
  serviceId: z.number().int('Invalid service selection'),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine((val) => {
      // Must not be in the past
      const parts = val.split('-');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      
      const selectedDate = new Date(year, month, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return selectedDate >= today;
    }, { message: 'Appointment date cannot be in the past' })
    .refine((val) => {
      // Must not be Sunday
      const parts = val.split('-');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      
      const selectedDate = new Date(year, month, day);
      return selectedDate.getDay() !== 0; // 0 is Sunday
    }, { message: 'Appointments cannot be scheduled on Sundays' }),
  preferredTime: z.enum(
    ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'],
    { message: 'Please select a valid time slot' }
  ),
  notes: z.string().max(1000, 'Notes must not exceed 1000 characters').optional().nullable(),
});

// POST /api/appointments - Book a new appointment
router.post('/', validateBody(createAppointmentSchema), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = req.body;

    // Check if the service exists
    const serviceList = await db
      .select()
      .from(services)
      .where(eq(services.id, data.serviceId))
      .limit(1);

    if (serviceList.length === 0) {
      res.status(400).json({
        error: {
          message: 'Selected service does not exist',
        },
      });
      return;
    }

    const service = serviceList[0];
    const reference = generateReference();

    // Insert appointment
    await db.insert(appointments).values({
      reference,
      fullName: data.fullName,
      phone: data.phone,
      carBrand: data.carBrand,
      carModel: data.carModel,
      carYear: data.carYear,
      serviceId: data.serviceId,
      serviceNameSnapshot: service.name,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      notes: data.notes || null,
      status: 'pending',
    });

    res.status(201).json({
      data: {
        reference,
        fullName: data.fullName,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        serviceName: service.name,
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/appointments/:reference - Look up booking by reference
router.get('/:reference', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const reference = Array.isArray(req.params.reference) 
      ? req.params.reference[0] 
      : req.params.reference;

    const result = await db
      .select()
      .from(appointments)
      .where(eq(appointments.reference, reference.toUpperCase().trim()))
      .limit(1);

    if (result.length === 0) {
      res.status(404).json({
        error: {
          message: 'Appointment booking reference not found',
        },
      });
      return;
    }

    const appt = result[0];

    res.json({
      data: {
        reference: appt.reference,
        fullName: appt.fullName,
        carBrand: appt.carBrand,
        carModel: appt.carModel,
        preferredDate: appt.preferredDate,
        preferredTime: appt.preferredTime,
        serviceName: appt.serviceNameSnapshot,
        status: appt.status,
        createdAt: appt.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
