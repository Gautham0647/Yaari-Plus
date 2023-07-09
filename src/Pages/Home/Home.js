import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
import { usePost } from "../../Context/PostConext";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserConect";
import { UserCard } from "../../Components/UsersCard/UserCard";
import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import { CreatePost } from "../../Components/CreatePost/CreatePost";
import { SearchUser } from "../../Components/SearchUser/SearchUser";

const Home = () => {
  const { posts } = usePost();
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
          <div>
            <SearchUser />
          </div>
          <h2>SUGGESTED USERS</h2>
          {suggestedUsers.map((user) => (
            <div key={user._id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
