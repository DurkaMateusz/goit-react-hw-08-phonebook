import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations'
import './LogoutButton.css';
export default function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className="logout" onClick={handleLogout}>
      <span>Logout</span>
    </button>
  );
}
