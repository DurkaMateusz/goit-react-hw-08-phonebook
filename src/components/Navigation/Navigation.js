import { NavLink } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../hooks/useAuth';
import { useColorMode, Button } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons'

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    <div className="navContainer">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? (
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
          Profile
        </NavLink>
      ) : (
        <>
          <NavLink to="/register" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
            Register
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
            Login
          </NavLink>
        </>
      )}
       <Button onClick={toggleColorMode} className="themeToggle">
       {colorMode === 'light'}<SunIcon />
      </Button>
    </div>
  );
}
