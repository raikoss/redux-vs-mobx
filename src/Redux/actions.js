/**
 * Action Creators
 */
export const updateName = name => dispatch => {
  dispatch({ type: 'updateName' });

  setTimeout(() => {
    dispatch({ type: 'updateNameSuccess', data: name });
  }, 2000);
}