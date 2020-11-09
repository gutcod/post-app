import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.length) {
    return <p className='text-center'>Not Posts Yet</p>;
  }
  return posts.map(post => <Post post={post} key={post} />);
};
