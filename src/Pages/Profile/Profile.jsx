
import { useParams } from "react-router-dom"
import { Leftsidebar } from "../../Components/Ui/Leftsidebar"
import "./Profile.css"
import { useAuth } from "../../Context/AuthContext";


export const Profile =()=>{
    const { username } = useParams();
    const {user} = useAuth()
    console.log(user)
    return (
        <div className="profile-container">
         <div className="profile-sidebar1">
          <Leftsidebar />
        </div>
        
      
        
        </div>
    )
}