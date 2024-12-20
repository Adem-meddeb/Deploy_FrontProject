import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import MyFooter from './components/MyFooter';
import Nav from './components/Nav';


function App() {
  const { token } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {token && !isAuthPage && <Nav />}
      <div className={token && !isAuthPage ? 'pt-16' : ''}>
        <Outlet />
      </div>
      {token && !isAuthPage && <MyFooter />}
    </>
  );
}

export default App;