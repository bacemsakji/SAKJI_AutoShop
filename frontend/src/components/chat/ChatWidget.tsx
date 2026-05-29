import React, { useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';
import { useChat } from '../../hooks/useChat';

const ChatWidget: React.FC = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
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

    await sendMessage(inputValue.trim());
    setInputValue('');
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
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Assistant is typing...</div>}
            {error && <div className={styles.error}>{error}</div>}
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
