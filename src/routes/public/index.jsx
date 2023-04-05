import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isAuth = false;
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
