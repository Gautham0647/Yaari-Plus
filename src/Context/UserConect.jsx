import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, userReducer } from "../Reducer/UserReducer";
import { useAuth } from "./AuthContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { token, user, setUser } = useAuth();
  const [users, userDispatch] = useReducer(userReducer, initialState);

  const getAllUser = async () => {
    try {
      const userReponse = await fetch("/api/users", {
        headers: { authorization: token },
        method: "GET",
      });
      const { users } = await userReponse.json();

      if (userReponse.status === 200) {
        userDispatch({
          type: "SET-USER",
          payload: users,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const handleFollow = async (followId) => {
    try {
      const userReponse = await fetch(`/api/users/follow/${followId}` , {
        headers: { authorization: token },
        method: "POST",
      });
      const { user } = await userReponse.json();
      if (userReponse.status === 200) {
        setUser(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

    const handleUnfollow = async (followId) => {
      try {
        const userReponse = await fetch(`/api/users/unfollow/${followId}`, {
          headers: { authorization: token },
          method: "POST",
        });

        const { user } = await userReponse.json();

        if (userReponse.status === 200) {
          setUser(user);
          userDispatch({
            type: "UNFOLLOW-USER",
            payload: user,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

   

    const editUserInfo = async (data) => {
      const userData = {
           bio: data.bio,
            profilePic: data.profilePic,
           website: data.website,
          };
      try {
        const userReponse = await fetch(`/api/users/edit` , {
          headers: { authorization: token },
          method: "POST",
          body: JSON.stringify({ userData })
        });
        const {user} = await userReponse.json();
console.log(user,"love")
        if (userReponse.status === 201) {
          setUser(user);
        }
      } catch (err) {
        console.log(err);
      }
    };
  

   








  const suggestedUsers = users.filter(({ username, _id }) => username !== user?.username && !user?.following.some((followedUser) => followedUser._id === _id)
  );

 

  return (
    <UserContext.Provider
      value={{ users, userDispatch, handleFollow,handleUnfollow, suggestedUsers,editUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);