import {  useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const Login = (e) => {
  const { toggleAuth } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
   // e.preventDefault();
    const body = {
      username: "Gautham",
      password: "Gautham5422",
    };

    const respones = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log(respones)

    const  encodedToken = await respones.json();
    console.log(encodedToken)
    if (encodedToken) {
      toggleAuth();
      localStorage.setItem("token",JSON.stringify(encodedToken))
      navigate("/")
    }
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
