/**
 * Action Creators
 */

// An action to update the name
export const updateName = name => dispatch => {
  dispatch({ type: 'updateName' });

  setTimeout(() => {
    dispatch({ type: 'updateNameSuccess', data: name });
  }, 2000);
}