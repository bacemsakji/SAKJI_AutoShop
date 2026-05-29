import React, { TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea 
          ref={ref} 
          className={`${styles.input} ${error ? styles.inputError : ''} ${className}`} 
          style={{ minHeight: '120px', resize: 'vertical' }}
          {...props} 
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
