import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const foundUser = localStorage.getItem("loggedInYaariUser");
  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [user, setUser] = useState(foundUser ? JSON.parse(foundUser) : null);
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