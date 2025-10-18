import { actions } from "../actions";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (prevState, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING: {
      return {
        ...prevState,
        loading: true,
      };
    }
    case actions.post.DATA_FETCHED: {
      return {
        ...prevState,
        loading: false,
        error: null,
        posts: action.data,
      };
    }
    case actions.post.DATA_FETCH_ERROR: {
      return {
        ...prevState,
        loading: false,
        error: action.error,
      };
    }
    case actions.post.DATA_EDITED: {
      return {
        ...prevState,
        loading: false,
        posts: action.data,
      };
    }

    default:
      break;
  }
};
export default postReducer;
