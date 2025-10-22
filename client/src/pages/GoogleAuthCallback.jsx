// pages/GoogleAuthCallback.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingComp from '../components/LoadingComp'; // Optional: Use your loading component

const GoogleAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      // Store the token in local storage
      localStorage.setItem('token', token);
      
      // Redirect the user to the home page
      navigate('/home');
    } else {
      // If no token is found, authentication failed. Redirect to login.
      console.error("Google authentication failed.");
      navigate('/login');
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingComp />
      <p className="ml-4 text-lg">Finalizing your login...</p>
    </div>
  );
};

export default GoogleAuthCallback;