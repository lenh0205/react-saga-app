import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import { authActions } from 'features/auth/authSlice';
import { useAppDispatch } from 'app/hooks';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <>
      <Button variant="contained" color="primary"
        onClick={() => dispatch(authActions.logout())}
      >
        Logout
      </Button>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
