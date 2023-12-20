import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
