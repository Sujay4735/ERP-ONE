import { Navigate } from "react-router-dom";

const NoAuthRoute = ({ children }) => {
  const token =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken") ||
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default NoAuthRoute;