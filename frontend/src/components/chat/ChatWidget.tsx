import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';
import { sendChatMessages, ChatMessage } from '../../api/chat';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi there! Describe your car problem, and I will try to diagnose it for you.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: inputValue.trim() };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send context of the whole conversation
      const reply = await sendChatMessages(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('Chat error', err);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I am having trouble connecting to the network right now. Please try again later or call us directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3 className={styles.chatTitle}>Diagnostic Assistant</h3>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Assistant is typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
              <input
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Describe the noise/issue..."
                disabled={isLoading}
              />
              <button type="submit" className={styles.sendButton} disabled={isLoading || !inputValue.trim()}>
                ↑
              </button>
            </form>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          className={styles.chatButton} 
          onClick={() => setIsOpen(true)}
          aria-label="Open diagnostic chat"
        >
          <span className={styles.chatIcon}>💬</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
