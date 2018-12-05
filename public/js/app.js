import { handleFormSubmit } from './logic.js';
import { initDOMandListeners } from './view.js';

/**
 *
 * initialization
 *
 */
const initApp = function() {
  initDOMandListeners(handleFormSubmit);
};

export {
  initApp,
};
