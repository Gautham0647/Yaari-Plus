import React from "react";

import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import { usePost } from "../../Context/PostConext";
import "./Explore.css";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";

import { useUser } from "../../Context/UserConect";
import { Rightsidebar } from "../../Components/Ui/Rightsidebar/Rightsidebar";

const Explore = () => {
  const { posts } = usePost();
  const { suggestedUsers } = useUser();
  return (
    <div>
      <div className="explore-container">
        <div className="exp-sidebar1">
          <Leftsidebar />
        </div>
        <div>
          helllo
          <h2>Explore</h2>
          {posts.map((post, i) => {
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

export default Explore;
