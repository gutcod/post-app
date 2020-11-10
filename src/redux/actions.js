import { CREATE_POST } from "./type";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
