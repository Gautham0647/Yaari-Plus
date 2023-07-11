import { createContext, useContext, useEffect, useState,useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();




const initialState = { encodedToken: localStorage.getItem("token")};

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, encodedToken: action.payload };
      case "LOGOUT":
        return {...state,encodedToken:""}
  }
};


export const AuthProvider = ({ children }) => {

  const navigate = useNavigate()

  const [state, dispatch] = useReducer(authReducer,initialState);

  const token = localStorage.getItem("token");
  const foundUser = localStorage.getItem("loggedInYaariUser");
  
  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [user, setUser] = useState(foundUser ? JSON.parse(foundUser) : null);
  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  const signupHandler = async ({ firstName, lastName, username, password, }) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, username, password,profilePic:"https://tse1.mm.bing.net/th?id=OIP.LSDaZCxRd9oeYsgbJXDp7AHaEK&pid=Api&P=0&h=180" }),
      });
      if (response.status === 201) {
        const data = await response.json();
        // console.log(data);
        dispatch({ type: "AUTH_SUCCESS", payload: data.encodedToken });
        navigate("/login")
       

      }
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <AuthContext.Provider value={{ toggleAuth, token, isAuth, user, setUser,signupHandler}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);