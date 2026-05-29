import { apiClient } from './client';

export interface Service {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  priceMin: number | null;
  priceMax: number | null;
  estimatedHours: number | null;
  iconName: string | null;
}

export const getServices = async (category?: string): Promise<Service[]> => {
  const params = category && category !== 'All' ? { category } : {};
  const response = await apiClient.get<{ data: Service[] }>('/api/services', { params });
  return response.data.data;
};
