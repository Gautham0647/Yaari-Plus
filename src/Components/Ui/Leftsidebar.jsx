
import "./Leftsidebar"
import { Link} from "react-router-dom";


export const Leftsidebar = ()=>{
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
            </div>
    )
}