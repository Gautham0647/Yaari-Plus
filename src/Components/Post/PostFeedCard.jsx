//import { useBookmark } from "../../Context/BookmarkContext";
import { usePost } from "../../Context/PostConext";
import "./PostFeedCard.css";

export const PostFeedCard = ({ post }) => {
  const { getLikePostHandler } = usePost();
  //const {addToBookmarkHandler} = useBookmark();
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
                <button onClick={()=>getLikePostHandler(post._id)}>Like{post.likes.likeCount}</button>
              </div>
              <div>
                <button>comment</button>
              </div>
              <div>
                <button  
             

                >bookmarks</button>
              </div>
              <div>
                <button>share</button>
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
