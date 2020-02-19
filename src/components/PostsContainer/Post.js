// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  console.log("Post props:", props)
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  console.log(likes);
  console.log(props.post.likes);

  // set up function to increment likes...will be passed as a prop...?
  // const incrementLikes = () => {
  //   setLikes(likes => likes + 1);
  // }; <---- moved up to App.js to fix likes bug
  


  return (
    <div key={props.post.id} className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={() => props.incrementLikes(props.post)} likes={props.post.likes}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;


