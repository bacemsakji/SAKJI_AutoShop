import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
      <h1 style={{ color: 'var(--color-accent)', fontSize: 'var(--text-6xl)', marginBottom: '24px' }}>404</h1>
      <h2 style={{ marginBottom: '48px' }}>This page doesn't exist.</h2>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
