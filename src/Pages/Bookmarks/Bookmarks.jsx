import React from "react";
import { Link } from "react-router-dom";
import { useBookmark } from "../../Context/BookmarkContext";
import { BookmarksCard } from "../../Components/BookmarksCard/BookmarksCard";
//import { usePost } from '../../Context/PostConext'

const Bookmarks = () => {
  const { bookmarks } = useBookmark();
  const isBookmark = bookmarks.length === 0;

  return (
    <div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/bookmarks">
          <p>Bookmarks</p>
        </Link>
        <Link to="/explore">
          <p>Explore</p>
        </Link>
      </div>
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
                  <BookmarksCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
