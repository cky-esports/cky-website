import { UPDATE_SCROLL_POS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const updateScrollPos = scrollPos => ({
  type: UPDATE_SCROLL_POS,
  scrollPos,
});
