import React from "react";
//import { Link } from "react-router-dom";
import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import { usePost } from "../../Context/PostConext";
import "./Explore.css";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";

const Explore = () => {
  const { posts } = usePost();
  return (
    <div>
      <div className="explore-container">
        <div className="exp-sidebar1">
          <Leftsidebar />
        </div>
        <div>
          <h2>Explore</h2>
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

export default Explore;
