import { useState, useCallback, useEffect } from 'react';
import { sendChatMessage, ChatMessage } from '../api/chat';
import axios from 'axios';

interface Message {
  id: string;
  role: 'user' | 'model' | 'assistant';
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'model',
  content: "Hello! I'm SAKJI, your automotive assistant. Describe your car's symptoms and I'll help identify the problem. What's going on with your vehicle?",
  timestamp: new Date(),
};

const STORAGE_KEY = 'sakji_chat_history';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (err) {
      console.error('Failed to save chat history:', err);
    }
  }, [messages]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Build history for API (exclude welcome message, map to API shape)
      const apiMessages: ChatMessage[] = [
        ...messages
          .filter((m) => m.id !== 'welcome')
          .map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: content.trim() },
      ];

      const reply = await sendChatMessage(apiMessages);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'model',
          content: reply,
          timestamp: new Date(),
        },
      ]);
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data?.error?.message
          ? err.response.data.error.message
          : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const clearChat = useCallback(() => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { messages, isLoading, error, sendMessage, clearChat };
}
