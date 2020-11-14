import { showAlert } from "./actions";
import { CREATE_POST } from "./type";

const forbidden = ["fuck", "php", "spam"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word));
        if (found.length) {
          return dispatch(showAlert("not this shit"));
        }
      } else {
        return next(action);
      }
    };
  };
}
