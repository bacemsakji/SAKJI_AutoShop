import { pgTable, serial, text, integer, timestamp, boolean, varchar } from 'drizzle-orm/pg-core';

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  slug: varchar('slug', { length: 120 }).notNull().unique(),
  category: varchar('category', { length: 60 }).notNull(),
  description: text('description').notNull(),
  shortDescription: varchar('short_description', { length: 200 }).notNull(),
  priceMin: integer('price_min'),
  priceMax: integer('price_max'),
  estimatedHours: integer('estimated_hours'),
  iconName: varchar('icon_name', { length: 60 }),
  isActive: boolean('is_active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  reference: varchar('reference', { length: 20 }).notNull().unique(),
  fullName: varchar('full_name', { length: 120 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  carBrand: varchar('car_brand', { length: 60 }).notNull(),
  carModel: varchar('car_model', { length: 60 }).notNull(),
  carYear: integer('car_year').notNull(),
  serviceId: integer('service_id').references(() => services.id),
  serviceNameSnapshot: varchar('service_name_snapshot', { length: 120 }),
  preferredDate: varchar('preferred_date', { length: 10 }).notNull(), // YYYY-MM-DD
  preferredTime: varchar('preferred_time', { length: 5 }).notNull(),  // HH:MM
  notes: text('notes'),
  status: varchar('status', { length: 30 }).default('pending'),
  // status values: pending | confirmed | in_progress | completed | cancelled
  createdAt: timestamp('created_at').defaultNow(),
});

export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 80 }).notNull(),
  carModel: varchar('car_model', { length: 80 }),
  rating: integer('rating').notNull(),  // 1-5
  comment: text('comment').notNull(),
  isVisible: boolean('is_visible').default(true),
  createdAt: timestamp('created_at').defaultNow(),
});
