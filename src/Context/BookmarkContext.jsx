import { createContext, useContext, useReducer } from "react";
//import { usePost } from "./PostConext";
import { bookmarkReducer, initialState } from "../Reducer/BookmarkReducer";
import { useAuth } from "./AuthContext";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const { token } = useAuth();

  const [posts, bookmarkDispatch] = useReducer(bookmarkReducer, initialState);

  const addToBookmarkHandler = async (_id) => {
    try {
      const response = await fetch(`/api/users/bookmark/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });
      const somthing = await response.json();
      console.log(somthing);
      if (response.status === 200) {
        bookmarkDispatch({
          type: "ADD-TO-BOOKMARK",
          payload: posts,
        });
      }
    } catch (e) {}
  };

  return (
    <BookmarkContext.Provider value={{ addToBookmarkHandler }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);
