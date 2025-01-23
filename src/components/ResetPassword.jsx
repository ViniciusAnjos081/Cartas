import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Container,
  Paper
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { verifyResetToken, resetPassword } = useAuth();
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await verifyResetToken(token);
        setIsTokenValid(true);
      } catch (error) {
        setStatus({
          type: 'error',
          message: 'This password reset link is invalid or has expired.'
        });
      }
    };

    if (token) {
      validateToken();
    }
  }, [token, verifyResetToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (passwords.password !== passwords.confirmPassword) {
      setStatus({
        type: 'error',
        message: 'Passwords do not match.'
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await resetPassword(token, passwords.password);
      setStatus({
        type: 'success',
        message: 'Password has been successfully reset.'
      });
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isTokenValid && status.type === 'error') {
    return (
      <Container component="main" maxWidth="xs">
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#2b2440',
            mt: 8
          }}
        >
          <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
            {status.message}
          </Alert>
          <Button
            fullWidth
            variant="contained"
            href="/forgot-password"
            sx={{
              backgroundColor: '#4a90e2',
              '&:hover': {
                backgroundColor: '#357abd',
              },
            }}
          >
            Request New Reset Link
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#2b2440',
          mt: 8
        }}
      >
        <Typography variant="h5" component="h1" sx={{ color: 'white', mb: 3 }}>
          Set New Password
        </Typography>

        {status.message && (
          <Alert severity={status.type} sx={{ mb: 2, width: '100%' }}>
            {status.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            required
            fullWidth
            type="password"
            name="password"
            label="New Password"
            value={passwords.password}
            onChange={handleChange}
            disabled={isLoading}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4a90e2',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4a90e2',
              },
            }}
          />

          <TextField
            required
            fullWidth
            type="password"
            name="confirmPassword"
            label="Confirm New Password"
            value={passwords.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4a90e2',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#4a90e2',
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{
              mb: 2,
              backgroundColor: '#4a90e2',
              '&:hover': {
                backgroundColor: '#357abd',
              },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Reset Password'
            )}
          </Button>

          <Button
            fullWidth
            variant="text"
            href="/login"
            disabled={isLoading}
            sx={{
              color: '#4a90e2',
              '&:hover': {
                backgroundColor: 'rgba(74, 144, 226, 0.1)',
              },
            }}
          >
            Back to Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ResetPassword; 