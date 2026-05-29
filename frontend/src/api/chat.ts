import axios from 'axios';

export interface ChatMessage {
  role: 'user' | 'model' | 'assistant';
  content: string;
}

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
    messages,
  });
  return data.data.reply;
}
