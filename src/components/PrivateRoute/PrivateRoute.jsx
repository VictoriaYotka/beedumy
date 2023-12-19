import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = true;
  const isLoggedIn = true;

  return isLoggedIn && token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
