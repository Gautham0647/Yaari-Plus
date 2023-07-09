import { createContext, useContext, useEffect, useReducer } from "react";

import { initialState, postReducer } from "../Reducer/PostReducer";
import { useAuth } from "./AuthContext";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { token, user } = useAuth();

  const [posts, postDispatch] = useReducer(postReducer, initialState);

  const getAllPosts = async () => {
    try {
      const postResponse = await fetch("/api/posts", {
        method: "GET",
      });
      const { posts } = await postResponse.json();

      if (postResponse.status === 200) {
        postDispatch({
          type: "SET-POST",
          payload: posts,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const newAddPost = async (postText, setContent) => {
    const postData = {
      content: postText,
      profilePic: user.profilePic,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    try {
      const postResponse = await fetch("/api/posts", {
        headers: { authorization: token },
        method: "POST",
        body: JSON.stringify({ postData }),
      });

      const { posts } = await postResponse.json();

      if (postResponse.status === 201) {
        postDispatch({
          type: "NEW-POST",
          payload: posts,
        });
        setContent("");
      }
    } catch (err) {
      console.log("in con", err);
    }
  };

  const getLikePostHandler = async (_id) => {
    try {
      const postResponse = await fetch(`/api/posts/like/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });

      const { posts } = await postResponse.json();

      if (postResponse.status === 201) {
        postDispatch({
          type: "LIKE-COUNT",
          payload: posts,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDislikePostHandler = async (_id) => {
    try {
      const postResponse = await fetch(`/api/posts/dislike/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });

      const { posts } = await postResponse.json();

      if (postResponse.status === 201) {
        postDispatch({
          type: "DISLIKE-COUNT",
          payload: posts,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deletePostHandler = async (_id) => {
    console.log("id", _id);
    try {
      const postResponse = await fetch(`/api/posts/${_id}`, {
        headers: { authorization: token },
        method: "DELETE",
      });

      const { posts } = await postResponse.json();
      if (postResponse.status === 201) {
        postDispatch({
          type: "DELETE-POST",
          payload: posts,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editPost = async (post, content, onClose) => {
    console.log("id", post);
    try {
      const postResponse = await fetch(`/api/posts/edit/${post._id}`, {
        headers: { authorization: token },
        method: "POST",
        body: JSON.stringify({ postData: { content } }),
      });

      const { posts } = await postResponse.json();
      console.log(posts.find((p) => p._id === post._id));
      if (postResponse.status === 201) {
        postDispatch({
          type: "EDIT-POST",
          payload: posts,
        });
        onClose();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        postDispatch,
        getLikePostHandler,
        getDislikePostHandler,
        deletePostHandler,
        newAddPost,
        editPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
