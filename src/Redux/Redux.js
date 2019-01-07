import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import ReduxInner from './ReduxInner';

const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);

/**
 * Main Wrapper/Higher order Component for the Redux showcase
 */
const Redux = () => {
  return (
    <Provider store={store}>
      <ReduxInner />
    </Provider>
  )
}


export default Redux;