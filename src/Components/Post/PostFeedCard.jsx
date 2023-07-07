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

export const PostFeedCard = ({ post }) => {
  const { getLikePostHandler, getDislikePostHandler } = usePost();
  const { addToBookmarkHandler } = useBookmark();
  const computeTime = dateFormat(post.createdAt);
  console.log(post, "Current-post");
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
                  <p>{`${post.firstName} ${post.lastName}`}</p>
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
                  className="heart icon"
                  onClick={() => getLikePostHandler(post._id)}
                />
              </div>

              <div>
                <AiFillDislike
                  onClick={() => getDislikePostHandler(post._id)}
                />
              </div>
              <div>
                <FaRegComment />
              </div>
              <div>
                <BsBookmark onClick={() => addToBookmarkHandler(post._id)} />
              </div>
              <div>
                <FaShareAlt />
              </div>
              <div>
                <MdDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//<div>{post.username}</div>
//

// {post.likes.likeCount === 0 ? (
//   <button onClick={() => getLikePostHandler(post._id)}>
//     like
//   </button>
// ) : (
//   <button onClick={() => getDislikePostHandler(post._id)}>
//     dislike
//   </button>
// )}

// {post.likes.likeCount}

//<button >
// like
// </button>
