//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
// import dummyData from "../../dummy-data"; <--- moved up a level to account for search bar functionality

const PostsPage = props => {
  // set up state for your data
  // const [data] = useState(dummyData);
  // console.log("This is dummydata data var:", data); <--- moved up a level

  console.log("posts page props:", props)



  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {props.searchResults.map(post => (
        <Post post={post} incrementLikes={props.incrementLikes} />
      ))}
    </div>
  );
};

export default PostsPage;

