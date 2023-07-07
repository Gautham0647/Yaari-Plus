import { useUser } from "../../Context/UserConect";
import "./UserCard.css";

export const UserCard = ({ user }) => {
  const { handleFollow } = useUser();
  return (
    <div>


    <div>
      <div className="suggestion-list">
        <img className="profile-pic" src={user.profilePic} alt="bio-pic" />
        <div className="suggested-user-details">
          <span>@{user.username}</span>
        </div>
        <button onClick={() => handleFollow(user._id)}>Follow</button>

        <hr />
      </div>
      </div>
    </div>
  );
};
