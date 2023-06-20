import React from 'react'
import {Link} from "react-router-dom"
//import { usePost } from '../../Context/PostConext'

const Bookmarks = () => {
  
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

export default Bookmarks
