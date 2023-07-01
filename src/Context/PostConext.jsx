import { createContext, useContext, useEffect, useReducer } from "react";

import { initialState, postReducer } from "../Reducer/PostReducer";
import { useAuth } from "./AuthContext";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { token } = useAuth();

  const [posts, postDispatch] = useReducer(postReducer, initialState);

  const getAllPosts = async () => {
    try {
      const postResponse = await fetch("/api/posts",{
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



  const newAddPost = async () =>{
    try{
      const postResponse = await fetch("/api/user/posts/" , {
        headers: { authorization: token },
        method: "POST",
        body: JSON.stringify({ posts }),
      })

      const somthing = await postResponse.json();
     console.log(somthing)
      if(postResponse.status ===201){
        postDispatch({
          type:"NEW-POST",
          payload: posts
        })
      }
    }
    catch{

    }
  }

  const getLikePostHandler = async (_id) => {
    try {
      const postResponse = await fetch(`/api/posts/like/${_id}`, {
        headers: { authorization: token },
        method: "POST",
      });

      const somthing = await postResponse.json();
     console.log(somthing , "some")
      if (postResponse.status === 201) {
        postDispatch({
          type: "LIKE-COUNT",
          // payload: posts,
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

      const somthing = await postResponse.json();
      console.log("some", somthing);
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

  return (
    <PostContext.Provider
      value={{
        posts,
        postDispatch,
        getLikePostHandler,
        getDislikePostHandler,
        deletePostHandler,
        newAddPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);

//
