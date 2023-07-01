import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token)
  const [isAuth, setIsAuth] = useState(token ? true : false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ toggleAuth, token ,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
