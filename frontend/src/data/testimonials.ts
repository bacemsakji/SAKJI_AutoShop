export interface Testimonial {
  id: number;
  clientName: string;
  carModel: string;
  rating: number;
  comment: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: 'Mohamed Ben Ali',
    carModel: 'Opel Astra G',
    rating: 5,
    comment: 'Excellent service! They diagnosed my oil issue immediately and had the car ready the same day. Very professional team.',
  },
  {
    id: 2,
    clientName: 'Fatima Trabelsi',
    carModel: 'Ford Focus Mk2',
    rating: 5,
    comment: 'My brakes were squealing badly. SAKJI fixed them perfectly. The work was clean and the price was fair. Highly recommend!',
  },
  {
    id: 3,
    clientName: 'Khalil Jebali',
    carModel: 'Opel Corsa C',
    rating: 5,
    comment: 'The OBD scan was thorough — they found the exact fault code and explained everything clearly. Top-notch expertise.',
  },
  {
    id: 4,
    clientName: 'Amira Gharbi',
    carModel: 'Ford Fiesta Mk5',
    rating: 4,
    comment: 'Full service was done efficiently. They reminded me about things I had completely forgotten were overdue. Great attention to detail.',
  },
  {
    id: 5,
    clientName: 'Sarra Ben Youssef',
    carModel: 'Ford Focus Mk1',
    rating: 5,
    comment: 'My car was pulling to the left for months. After the 4-wheel alignment at SAKJI, it drives like new. Very satisfied!',
  },
  {
    id: 6,
    clientName: 'Nizar Boughzala',
    carModel: 'Opel Astra H',
    rating: 4,
    comment: 'Battery was draining overnight. They replaced the alternator quickly and the car has been perfect ever since. Solid work.',
  },
];

export function getTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}
