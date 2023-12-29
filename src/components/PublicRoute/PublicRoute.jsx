import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
