import React from 'react'
import {Link} from "react-router-dom"


const Explore = () => {
  return (
    <div>
<div>
        <Link to="/"><p>Home</p></Link>
        <Link to="/bookmarks"> <p>Bookmarks</p></Link>
        <Link to="/explore"><p>Explore</p></Link>
    </div>

    </div>
  )
}

export default Explore
