import React from 'react';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound';
import { Route, Routes ,Navigate} from 'react-router-dom';
import Header from '../components/Header';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = true;
  
    return isLoggedIn ? children : <Navigate to="/sign_in" />;
  };

const AppRoutes = () => {
  return (
    <div>
      <Header/>
      <Routes>
        
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
