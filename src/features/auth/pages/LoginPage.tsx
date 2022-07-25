import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';
import CircularProgress from '@mui/material/CircularProgress';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

  const handleLoginClick = () => {
    // Todo: Get username + password from login form
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: 3,
        }}
      >
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp;
            Fake Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
