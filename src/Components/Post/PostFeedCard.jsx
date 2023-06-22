import { useBookmark } from "../../Context/BookmarkContext";
import { usePost } from "../../Context/PostConext";
import "./PostFeedCard.css";

export const PostFeedCard = ({ post }) => {
  const { getLikePostHandler, getDislikePostHandler ,deletePostHandler} = usePost();
  const { addToBookmarkHandler } = useBookmark();
  return (
    <div>
      <div className="post-wrapper">
        <div className="post-item-container">
          <div>for img</div>
          <div className="post-text">
            <div>
              <span>{post.username}</span> {post.updatedAt}
            </div>
            <div> {post.content} </div>
            <div className="post-footer">
              <div>
                {post.likes.likeCount === 0 ? (
                  <button onClick={() => getLikePostHandler(post._id)}>
                    like
                  </button>
                ) : (
                  <button onClick={() => getDislikePostHandler(post._id)}>
                    dislike
                  </button>
                )}

                {post.likes.likeCount}
              </div>
              <div>
                <button>comment</button>
              </div>
              <div>
                <button onClick={() => addToBookmarkHandler(post._id)}>
                  bookmarks
                </button>
              </div>
              <div>
                <button>share</button>
              </div>
              <div>
                <button 
                 onClick = { ()=>{deletePostHandler(post._id)}}
                >Delete</button>
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
