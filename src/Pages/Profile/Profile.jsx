import { useState } from "react";
import { useParams } from "react-router-dom";
import { Leftsidebar } from "../../Components/Ui/Leftsidebar";
import "./Profile.css";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserConect";
import ProfileDetailsCard from "./ProfileDetailsCard";
import { usePost } from "../../Context/PostConext";
import { PostFeedCard } from "../../Components/Post/PostFeedCard";
import { Rightsidebar } from "../../Components/Ui/Rightsidebar/Rightsidebar";

export const Profile = () => {
  const { username } = useParams();
  const { user } = useAuth();
  const { users, handleFollow, handleUnfollow, suggestedUsers } = useUser();
  const { posts } = usePost();

  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const userProfile = users.find((user) => user?.username === username);

  const isFollowed = user?.following?.some(
    ({ username }) => username === user?.username
  );

  const filteredPost = posts.filter(
    (post) =>
      post.username === user?.username ||
      user?.following.some(
        (followedUser) => followedUser.username === post.username
      )
  );

  return (
    <div className="profile-container">
      <div className="profile-sidebar1">
        <Leftsidebar />
      </div>
      <div>
        {username === user?.username ? (
          <div className="profile">
            <img
              className="profile-picture"
              src={user?.profilePic}
              alt="bio-pic"
            />
            <span>{user?.fullname}</span>
            <p className="user-bio">{user?.bio}</p>
            <a href={user?.website} target="_blank">
              {user?.website}
            </a>
            <p>
              <span>Followers:{user?.followers.length}</span>
              <span>Following:{user?.following.length}</span>
            </p>
            <button
              className="edit-profile-btn"
              onClick={() => setShowProfileDetails(true)}
            >
              Edit
            </button>
            <div>
              {showProfileDetails && (
                <ProfileDetailsCard
                  setShowProfileDetails={setShowProfileDetails}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="profile">
            <img
              className="profile-pic"
              src={userProfile?.profilePic}
              alt="profile-pic"
            />
            <span>{userProfile?.fullname}</span>
            <p className="user-bio">{user?.bio}</p>
            <p>
              {/* <span>Post:{loggedInUserPosts.length}</span> */}
              <span>Followers:{userProfile?.followers.length}</span>
              <span>Following:{userProfile?.following.length}</span>
            </p>
            {isFollowed ? (
              <button
                onClick={() => handleUnfollow(userProfile?._id)}
                className="edit-profile-btn"
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => handleFollow(userProfile?._id)}
                className="edit-profile-btn"
              >
                Follow
              </button>
            )}
          </div>
        )}
        <div>
          {filteredPost.map((post, i) => {
            return (
              <div key={i}>
                <PostFeedCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="suggestion-container">
        <Rightsidebar suggestedUsers={suggestedUsers} />
      </div>
    </div>
  );
};
