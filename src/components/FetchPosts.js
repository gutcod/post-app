import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return (
      <div className='spinner-border text-danger' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }
  if (!posts.length) {
    return (
      <button className='btn btn-primary' onClick={() => dispatch(fetchPosts())}>
        Load
      </button>
    );
  }
  return posts.map(post => <Post post={post} key={post.id} />);
};
