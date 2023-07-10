import { createContext, useContext, useReducer } from "react";
//import { usePost } from "./PostConext";
import { bookmarkReducer, initialState } from "../Reducer/BookmarkReducer";
import { useAuth } from "./AuthContext";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const { token } = useAuth();

  const [bookmarks, bookmarkDispatch] = useReducer(
    bookmarkReducer,
    initialState
  );

  const addToBookmarkHandler = async (_id) => {
    try {
      const response = await fetch(`/api/users/bookmark/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });
      const {bookmarks} = await response.json();

      if (response.status === 200) {
        bookmarkDispatch({
          type: "ADD-TO-BOOKMARK",
          payload: bookmarks,
        });
      }
    } catch (e) {}
  };

  const removeFromBookmarkHandler = async (_id) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });

      const { bookmarks } = await response.json();
      //console.log("some", somthing);
      if (response.status === 200) {
        bookmarkDispatch({
          type: "REMOVE-FROM-BOOKMARK",
          payload: bookmarks,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{ addToBookmarkHandler, bookmarks, removeFromBookmarkHandler }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);
