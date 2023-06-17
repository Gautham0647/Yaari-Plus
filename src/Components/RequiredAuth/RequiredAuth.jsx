import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const RequiredAuth = ({ children }) => {
  const { isAuth } = useAuth();
  console.log(isAuth)
  const location = useLocation();
  return isAuth ? (children ): <Navigate to="/login" state={{ location }} />;
};
