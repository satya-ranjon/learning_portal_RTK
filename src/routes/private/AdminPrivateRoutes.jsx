import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoutes = () => {
  const isAuth = true;
  const isAdmin = true;
  console.log("Admin Routes");

  return isAuth && isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoutes;
