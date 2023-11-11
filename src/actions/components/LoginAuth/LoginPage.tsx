import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/register') {
      setAuthMode('signup');
    } else {
      setAuthMode('signin');
    }
  }, [location.pathname]);

  return (
    <div>
      {authMode === 'signin' ? (
        <LoginComponent />
      ) : (
        <RegisterComponent />
      )}
    </div>
  );
};

export default LoginPage;
