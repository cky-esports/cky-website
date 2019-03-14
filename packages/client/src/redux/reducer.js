import { UPDATE_SCROLL_POS } from './types';
import initialState from './initialState';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case UPDATE_SCROLL_POS:
      return {
        ...state,
        scrollPos: action.scrollPos,
      };
    default:
      return state;
  }
};
