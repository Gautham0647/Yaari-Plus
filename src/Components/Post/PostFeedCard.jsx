import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useBookmark } from "../../Context/BookmarkContext";
import { usePost } from "../../Context/PostConext";
import { dateFormat } from "../../Utils/Date";
import "./PostFeedCard.css";
import { Modal } from "../Ui/Modal/Modal";
import { useState } from "react";
import { CreatePost } from "../CreatePost/CreatePost";
import { useNavigate } from "react-router-dom";

export const PostFeedCard = ({ post }) => {
  const { getLikePostHandler, getDislikePostHandler, deletePostHandler } =
    usePost();
    const navigate = useNavigate();
  const { addToBookmarkHandler } = useBookmark();
  const [show, setShow] = useState(false);
  const editPostHandler = () => {
    setShow(true);
  };
  const onClose = () => setShow((s) => !s);
  const computeTime = dateFormat(post.createdAt);


  const handleUserPosts = (username) => {
    //  getUserPosts(username);
    navigate(`/profile/${username}`);
  };
  //console.log(post, "Current-post");
  return (
    <div>
      <div className="post-wrapper">
        <div className="post-item-container">
          <div className="profile-pic-container">
            <img src={post.profilePic} alt="bio-pic" />
          </div>

          <div className="post-details">
            <div className="user-details-container">
              <div className="user-details">
                <div>
                  <p onClick={() => handleUserPosts(post.username)}>{`${post.firstName} ${post.lastName}`}</p>
                 
                  <p className="username">{`@${post.username}`}</p>
                </div>
                <p className="date">{computeTime}</p>
              </div>
            </div>

            <div className="post-content-container">
              <p>{post.content}</p>
              {post.mediaUrl && (
                <div className="post-imag-container">
                  <LazyLoadImage
                    src={post.mediaUrl}
                    alt="media"
                    effect="blur"
                  />
                </div>
              )}
            </div>

            <div className="icon-container">
              <div className="individual-icon-container">
                {post.likes.likeCount}
                <AiFillLike
                  className="like icon"
                  onClick={() => getLikePostHandler(post._id)}
                />
              </div>

              <div className="individual-icon-container">
                <AiFillDislike
                  className="icon"
                  onClick={() => getDislikePostHandler(post._id)}
                />
              </div>
              <div>
                <FaRegComment className="icon" />
              </div>
              <div className="individual-icon-container">
                <BsBookmark
                  className="icon"
                  onClick={() => addToBookmarkHandler(post._id)}
                />
              </div>
              <div className="individual-icon-container">
                <FaShareAlt className="icon" onClick={editPostHandler} />
              </div>
              <div className="individual-icon-container">
                <MdDelete
                  className="icon"
                  onClick={() => deletePostHandler(post._id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onClose={onClose}>
        This is Modal
        <CreatePost edit={true} post={post} onClose={onClose} />
      </Modal>
    </div>
  );
};
