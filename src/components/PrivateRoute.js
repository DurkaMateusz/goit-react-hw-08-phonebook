import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo }) {
    const { isLoggedIn } = useAuth();
    return !isLoggedIn ? children : <Navigate to={redirectTo} />;
  }