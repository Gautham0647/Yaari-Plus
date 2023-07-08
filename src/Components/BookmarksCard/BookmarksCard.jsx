import { useBookmark } from "../../Context/BookmarkContext";
//import { PostContext } from "../../Context/PostConext";
import "./BookmarksCard.css";

export const BookmarksCard = ({ post }) => {
  console.log(post,"bookmark")
  const { removeFromBookmarkHandler } = useBookmark();
  return (
    <div>
      <div className="bookmark-wrapper">
        <div className="post-item-container">
          <div>for img</div>
          <div className="post-text">
            <div>
              <span>{post.username}</span> {post.updatedAt}
            </div>
            <div> {post.content} </div>
            <div className="post-footer">
              <div>
                <button onClick={() => removeFromBookmarkHandler(post._id)}>
                  Remove bookmarks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
