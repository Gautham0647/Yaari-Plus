import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
import { usePost } from "../../Context/PostConext";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserConect";
//import { UserCard } from "../../Components/UsersCard/UserCard";
import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import { CreatePost } from "../../Components/CreatePost/CreatePost";
//import { SearchUser } from "../../Components/SearchUser/SearchUser";
import { Rightsidebar } from "../../Components/Ui/Rightsidebar/Rightsidebar";

const Home = () => {
  const { posts,postDispatch } = usePost();
  const { user } = useAuth();
  const filteredPost = posts.filter(
    (post) =>
      post.username === user?.username ||
      user?.following.some(
        (followedUser) => followedUser.username === post.username
      )
  );
  const { isAuth, toggleAuth } = useAuth();
  //const [content, setContent] = useState();
  const { suggestedUsers } = useUser();

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

  const handleSortedPost = () => {
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    postDispatch({type:"SORT-DATE",payload:sortedPosts })
  };

  const sortLikedPosts = () => {
    const sortedPosts = [...posts].sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
    postDispatch({type:"SORT-LIKE",payload:sortedPosts })
  };

  return (
    <div>
      <div className="container">
        <aside className="sidebar1">
          <div className="link-container">
            <Leftsidebar />
          </div>
          <div className="logout-btn">
            <button>{renderAuthBtn}</button>
          </div>
        </aside>

        <div className="scroll">
          <div>
            <CreatePost />
          </div>
          <div> 
          <button id="sort-btn" onClick={handleSortedPost}>
              Latest Post
            </button>
          
          <button id="trending-btn" onClick={sortLikedPosts}>
          Trending
        </button></div>
          <h2>Lastest Post</h2>
          {filteredPost.map((post, i) => {
            return (
              <div key={i}>
                <PostFeedCard post={post} />
              </div>
            );
          })}
        </div>

        <div className="suggestion-container">
          

          <Rightsidebar suggestedUsers={suggestedUsers} />

        </div>
      </div>
    </div>
  );
};

export default Home;
