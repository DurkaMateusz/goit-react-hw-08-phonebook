import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Home from './Home/Home';
import Contacts from './Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import useAuth from 'hooks/useAuth';
import { ChakraProvider } from '@chakra-ui/react';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <ChakraProvider>
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <PrivateRoute redirectTo="/contacts">
                  <LoginForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PrivateRoute redirectTo="/contacts">
                  <RegisterForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <ProtectedRoute redirectTo="/login">
                  <Contacts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/login">
                  <UserMenu />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
};
