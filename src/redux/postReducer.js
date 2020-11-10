import { CREATE_POST } from "./type";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat([action.payload]),
        // posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
  return state;
};
