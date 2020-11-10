import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className='text-center'>Not Posts Yet</p>;
  }
  return syncPosts.map(post => <Post post={post} key={post.id} />);
};

const mapStateToProps = state => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};
export default connect(mapStateToProps, null)(Posts);
