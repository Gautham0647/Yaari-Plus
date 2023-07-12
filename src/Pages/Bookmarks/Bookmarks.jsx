import React from "react";
//import { Link } from "react-router-dom";
import { useBookmark } from "../../Context/BookmarkContext";
//import { BookmarksCard } from "../../Components/BookmarksCard/BookmarksCard";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import { useUser } from "../../Context/UserConect";
import { Rightsidebar } from "../../Components/Ui/Rightsidebar/Rightsidebar";

const Bookmarks = () => {
  const { bookmarks } = useBookmark();
  const { suggestedUsers } = useUser();
  const isBookmark = bookmarks.length === 0;

  return (
    <div className="explore-container">
      <Leftsidebar />
      <div>
        <h1>
          BookMarks
          <span>{bookmarks.length ? `(${bookmarks.length})` : null}</span>
        </h1>
        {isBookmark ? (
          <div>
            <p>No BookMarks</p>
          </div>
        ) : (
          <div>
            <div>
              {bookmarks.map((post, i) => (
                <div key={i}>
                  <PostFeedCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="suggestion-container">
        <Rightsidebar suggestedUsers={suggestedUsers} />
      </div>
    </div>
  );
};

export default Bookmarks;
