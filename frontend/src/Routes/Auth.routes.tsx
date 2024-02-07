import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';

const AuthRoutes = () => {
  return (
    <div className='flex bg-money bg-cover bg-center flex-col justify-center h-screen w-full items-center gap-5 '>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
};

export default AuthRoutes;
