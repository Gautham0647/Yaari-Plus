import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import { useAuth } from "../../Context/AuthContext";
import TransLogo from "../../Components/Collection/Yaari-TransLoogo.png";

import "./Login.css";

export const Login = (e) => {
  const { toggleAuth, setUser } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const respones = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const { encodedToken, foundUser } = await respones.json();

    if (encodedToken) {
      toggleAuth();
      setUser(foundUser);
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("loggedInYaariUser", JSON.stringify(foundUser))
      navigate("/");
    }
  };

  return (
    <div className="Login-wrapper">
      <div>
        <img src={TransLogo} alt="logo" />
      </div>
      <div>
        <form onSubmit={loginHandler} className="form flex" method="get">
          <h2 className="h3">Log In</h2>
          <p>
            <label>Username</label>
          </p>

          <input
            htmlFor="username"
            type="username"
            className="input_box"
            placeholder="username"
            name="username"
            defaultValue="Gautham"
          />
          <p>
            <label>Password</label>
          </p>
          <input
            htmlFor="password"
            className="input_box"
            placeholder="********"
            name="password"
            defaultValue="Gautham5422"
          />
          <div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
            <div className="login-btn">
              <button type="submit">Guest Mode</button>
            </div>
            <p> Don't have an account ?<Link to="/signup">Signup</Link>  </p>
          </div>
        </form>
      </div>
    </div>
  );
};