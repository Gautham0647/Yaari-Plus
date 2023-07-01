import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: uuid(),
  //   firstName: "Adarsh",
  //   lastName: "Balika",
  //   username: "Gauthamm",
  //   password: "Gautham5422",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  {
    _id: uuid(),
    fullname: "Adarsh Balika",
    username: "Gautham",
    password: "Gautham5422",
    profilePic:
      "https://i.pinimg.com/550x/41/01/1a/41011a92dfc518841f1ea4439eff4f21.jpg",
    bio: "Social Media Influencer",
    bookmarks: [],
    website: "https://mahima24-portfolio.netlify.app/",
    updatedAt: formatDate(),
    createdAt: formatDate(),
    followers: [
    
    ],
    following: [],
  },
];
