import React from "react";
import { Link ,NavLink} from "react-router-dom";

import "./Home.css";
import { usePost } from "../../Context/PostConext";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const { posts } = usePost();
  const { isAuth, toggleAuth } = useAuth()


  const renderAuthBtn = isAuth ? (
    <div  onClick= {()=>{
      localStorage.removeItem("token");
      return toggleAuth();
    }}>
      <span>Logout</span>
    </div>
  ):(
    <NavLink to="/login">
      <span >Login</span>
    </NavLink>
  );

  return (
    <div className="container">
      <aside className="sidebar1">
        <div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/bookmarks">
            <p>Bookmarks</p>
          </Link>
          <Link to="/explore">
            <p>Explore</p>
          </Link>
        </div>
        <div>
          <button>{renderAuthBtn}</button>
        </div>
      </aside>

      <div>
        <h2>Lastest Post</h2>
        {posts.map((post) => {
          return <PostFeedCard post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
