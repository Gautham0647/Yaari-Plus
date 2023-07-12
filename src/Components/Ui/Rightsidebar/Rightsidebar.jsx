import { SearchUser } from "../../SearchUser/SearchUser"
import { UserCard } from "../../UsersCard/UserCard"




export const Rightsidebar = ({suggestedUsers})=>{
    return (
        <>
        <div>
        <div>
            <SearchUser />
          </div>
<h2>SUGGESTED USERS</h2>
          {suggestedUsers.map((user) => (
            <div key={user._id}>
              <UserCard user={user} />
            </div>
          ))}

        </div>
        </>
    )
}



