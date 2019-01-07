import ReduxState from './State';

const initialState = new ReduxState();


/**
 * Reducer
 * @param {*} state 
 * @param {*} action 
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateName':
      return { ...state, loading: true };
    case 'updateNameSuccess': 
      return { ...state, loading: false, name: action.data };
    case 'updateNameError': 
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}