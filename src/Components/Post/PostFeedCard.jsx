import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

import { useBookmark } from "../../Context/BookmarkContext";
import { usePost } from "../../Context/PostConext";
import "./PostFeedCard.css";

export const PostFeedCard = ({ post }) => {
  const { getLikePostHandler, getDislikePostHandler } = usePost();
  const { addToBookmarkHandler } = useBookmark();
  return (
    <div>
      <div className="post-wrapper">
        <div className="post-item-container">
          <div className="avatar-img">for img</div>
          <div className="post-text">
            <div>
              <span>{post.username}</span> {post.updatedAt}
            </div>
            <div> {post.content} </div>

            <div className="post-footer">
              <div>
                {post.likes.likeCount}
                <AiFillLike onClick={() => getLikePostHandler(post._id)} />
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
