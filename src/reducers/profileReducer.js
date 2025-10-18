import { actions } from "../actions";

export const initialState = {
  user: {},
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (prevState, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return {
        ...prevState,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED: {
      return {
        ...prevState,
        user: action.data.user,
        posts: action.data.posts,
        loading: false,
      };
    }
    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...prevState,
        error: action.error,
        loading: false,
      };
    }
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...prevState,
        loading: false,
        user: {
          ...prevState.user,
          bio: action.data,
        },
      };
    }
    case actions.profile.IMAGE_UPDATED: {
      return {
        ...prevState,
        loading: false,
        user: {
          ...prevState.user,
          avatar: action.data,
        },
      };
    }

    default:
      return prevState;
  }
};
export default profileReducer;
