import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Home.css";
import { usePost } from "../../Context/PostConext";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const { posts } = usePost();
  const { isAuth, toggleAuth } = useAuth();

  const renderAuthBtn = isAuth ? (
    <div
      onClick={() => {
        localStorage.removeItem("token");
        return toggleAuth();
      }}
    >
      <span>Logout</span>
    </div>
  ) : (
    <NavLink to="/login">
      <span>Login</span>
    </NavLink>
  );

  return (
    <div>
      <div className="container">
        <aside className="sidebar1">
          <div className="link-container">
            <div className="link">
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
            <div className="link">
              <Link to="/bookmarks">
                <p>Bookmarks</p>
              </Link>
            </div>
            <div className="link">
              <Link to="/explore">
                <p>Explore</p>
              </Link>
            </div>
          </div>
          <div className="logout-btn">
            <button>{renderAuthBtn}</button>
          </div>
        </aside>

        <div>
          <h2>Lastest Post</h2>
          {posts.map((post, i) => {
            return (
              <div key={i}>
                <PostFeedCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
