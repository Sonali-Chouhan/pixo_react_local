import React from 'react';
import { Route, Routes } from "react-router-dom";
import IndexSignIn from '../Component/SingIn/Index';
import IndexSignUp from '../Component/SingUp';


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexSignIn />} />
      <Route path="/singup" element={<IndexSignUp />} />
    </Routes>
  )
}

export default PublicRoutes;