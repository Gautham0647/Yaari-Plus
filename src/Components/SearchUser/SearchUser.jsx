import { useState } from "react";
import { useUser } from "../../Context/UserConect";
import { UserList } from "./UserList";
import "./SearchUser.css";

export const SearchUser = () => {
  const [input, setInput] = useState("");
  const { suggestedUsers } = useUser();

  const findUsersList =
    input && suggestedUsers.filter((user) => user.username.includes(input));

  //console.log(findUsersList, "find");
  //console.log(suggestedUsers, "suges");
  return (
    <div>
      <input
        type="text"
        placeholder="Search People"
        className="input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {input && (
        <div className="find-users-container">
          {findUsersList.length === 0 && <p>No users found</p>}
          {findUsersList.map((user) => (
            <UserList key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

// <input
// type="text"
// placeholder="Search People"
// className="input-field"
// value={input}
// onChange={(e) => setInput(e.target.value)}
// />
// {input && (
// <div className="find-users-container">
//   {findUsersList.length === 0 && <p>No users found</p>}
//   {findUsersList.map((user) => (
//     <UserList key={user._id} user={user} />
//   ))}
// </div>
// )}
