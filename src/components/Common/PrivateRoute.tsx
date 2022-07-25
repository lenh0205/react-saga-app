import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = ({children}: any) => {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  
  if (!isLoggedIn) {
    return <Navigate to="/login"/>
  }
  return children;
};
