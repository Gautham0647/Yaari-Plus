import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { usePost } from "../../Context/PostConext";
import "./CreatePost.css";
import { useAuth } from "../../Context/AuthContext";

export const CreatePost = () => {
  const { newAddPost } = usePost();
  const [content, setContent] = useState();
  const { user } = useAuth();
  
  return (
    <div className="create-post-container">
      <div className="profile-pic-container">
        <LazyLoadImage
          src={user.profilePic}
          alt={user.username}
          effect="blur"
        />
      </div>
      <div className="post-input-container">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="post-input-action-container" >
          <button 
          className="post-btn"
          onClick={(e) => newAddPost(content)}>Post</button>
        </div>
      </div>
    </div>
  );
};
