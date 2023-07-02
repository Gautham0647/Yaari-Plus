import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [user, setUser] = useState([]);
  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ toggleAuth, token, isAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
