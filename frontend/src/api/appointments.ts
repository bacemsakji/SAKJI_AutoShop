import { apiClient } from './client';

export interface CreateAppointmentPayload {
  fullName: string;
  phone: string;
  carBrand: string;
  carModel: string;
  carYear: number;
  serviceId: number;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // HH:MM
  notes?: string;
}

export interface AppointmentResponse {
  reference: string;
  fullName: string;
  preferredDate: string;
  preferredTime: string;
  serviceName: string;
}

export const createAppointment = async (payload: CreateAppointmentPayload): Promise<AppointmentResponse> => {
  const response = await apiClient.post<{ data: AppointmentResponse }>('/api/appointments', payload);
  return response.data.data;
};

export const getAppointment = async (reference: string): Promise<any> => {
  const response = await apiClient.get<{ data: any }>(`/api/appointments/${reference}`);
  return response.data.data;
};
