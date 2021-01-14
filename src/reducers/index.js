import { combineReducers } from "redux";
import { SET_USER, CLEAR_USER, SET_CURRENT_CHANNEL } from "../actions/types";

const initialState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...initialState,
        isLoading: false,
      };
    default:
      return state;
  }
};

//initializing state
const initialChannelState = {
  currentChannel: null,
};

const channel_reducer = (state = initialChannelState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer,
});

export default rootReducer;
