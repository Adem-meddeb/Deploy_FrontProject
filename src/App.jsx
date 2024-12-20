import React from 'react';
import { Outlet } from 'react-router-dom';
import MyFooter from './components/MyFooter';
import { useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  const { token } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {token && !isAuthPage && <Navbar />}
      <div className={token && !isAuthPage ? 'pt-16' : ''}>
        <Outlet />
      </div>
      {token && !isAuthPage && <MyFooter />}
    </>
  );
}

export default App;