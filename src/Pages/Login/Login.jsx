import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import TransLogo from "../../Components/Collection/Yaari-TransLoogo.png";

import "./Login.css";

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

    const encodedToken = await respones.json();
    //console.log(encodedToken)
    if (encodedToken) {
      toggleAuth();
      localStorage.setItem("token", JSON.stringify(encodedToken));
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
            wrapperClassName="form__item form__email form__input_box"
            htmlFor="username"
            labelClassName="label"
            labelText=" username"
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
            wrapperClassName="form__item form__password form__input_box"
            htmlFor="password"
            labelClassName="label"
            labelText="Password"
            className="input_box"
            placeholder="********"
            name="password"
            defaultValue="Gautham5422"
          />
        </form>
      </div>
      <div>
        <div className="login-btn">
          <button onClick={loginHandler}>Login</button>
        </div>
        <div className="login-btn">
          <button onClick={loginHandler}>Guest Mode</button>
        </div>
        <p> Don't have an account ? Singup </p>
      </div>
    </div>
  );
};
