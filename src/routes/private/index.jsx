import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = true;
  console.log("Private Routes");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
