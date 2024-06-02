import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserListing from '../Component/Admin/UserListing';
import ResponsiveAppBar from '../Layout/Header/Header';

const PrivateRoutes = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/users" element={<UserListing />} />
      </Routes>
    </div>
  )
}
export default PrivateRoutes