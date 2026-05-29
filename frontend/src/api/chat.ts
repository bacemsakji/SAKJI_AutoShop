import { apiClient } from './client';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const sendChatMessages = async (messages: ChatMessage[]): Promise<string> => {
  const response = await apiClient.post<{ data: { reply: string } }>('/api/chat', { messages });
  return response.data.data.reply;
};
