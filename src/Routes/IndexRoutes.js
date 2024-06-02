import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";

const IndexRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useSelector((state => state?.users?.isAuth));
  useEffect(() => {
    if (isAuth && pathname === "/") {
      navigate("/users");
    }
    else if (!isAuth && pathname === "/users") {
      navigate('/');
    }
    else {
      navigate(pathname);
    }
  }, [isAuth]);
  return (
    <div>
      {isAuth ? (
        <PrivateRoutes />
      ) : (

        <PublicRoutes />
      )}
    </div>
  )
}
export default IndexRoutes