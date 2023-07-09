
import "./Leftsidebar"
import { Link} from "react-router-dom";


export const Leftsidebar = ()=>{
  //const foundUser = localStorage.getItem("loggedInYaariUser");
  const foundUser = JSON.parse(localStorage.getItem("loggedInYaariUser"));
  const loggedInUser = foundUser.username
  
  
    return(
        <div>
        <div className="link">
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
            <div className="link">
              <Link to="/bookmarks">
                <p>Bookmarks</p>
              </Link>
            </div>
            <div className="link">
              <Link to="/explore">
                <p>Explore</p>
              </Link>
            </div>
            <div className="link">
              <Link to={`/profile/${loggedInUser}`}>
                <p>Profile</p>
              </Link>
            </div>
            </div>
    )
}