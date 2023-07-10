import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import { Login } from "./Pages/Login/Login";
import { useAuth } from "./Context/AuthContext";
import { RequiredAuth } from "./Components/RequiredAuth/RequiredAuth";
import { Navbar } from "./Components/Navbar/Navbar";
import { Profile } from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";

function App() {
  const { isAuth } = useAuth();
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiredAuth>
              <Explore />
            </RequiredAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiredAuth>
              <Bookmarks />
            </RequiredAuth>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" replace /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
