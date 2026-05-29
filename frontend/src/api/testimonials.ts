import { apiClient } from './client';

export interface Testimonial {
  id: number;
  clientName: string;
  carModel: string | null;
  rating: number;
  comment: string;
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const response = await apiClient.get<{ data: Testimonial[] }>('/api/testimonials');
  return response.data.data;
};
