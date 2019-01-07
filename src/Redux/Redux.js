import React from 'react';
import { Provider, connect } from 'react-redux';
import ReduxState from './State';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = new ReduxState();

/**
 * Reducer
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initialState, action) => {
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

/**
 * Action Creators
 */
const actions = {
  updateName: name => dispatch => {
    dispatch({ type: 'updateName' });

    setTimeout(() => {
      dispatch({ type: 'updateNameSuccess', data: name });
    }, 2000);
  }
}

/**
 * Application store
 */
const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);

/**
 * Main Wrapper/Higher order Component
 */
const Redux = () => {
  return (
    <Provider store={store}>
      <ReduxInner />
    </Provider>
  )
}

// ---- Redux Inner -----

const mapStateToProps = (state, ownProps) => {
  return { ...state };
}

const mapDispatchToProps = ({ updateName: actions.updateName });

class ReduxInnerBody extends React.Component {
  componentDidMount() {
    this.props.updateName('Daniel');
  }

  render() {
    return (
      <div style={{ flex: '1 1 auto', border: '1px solid red', textAlign: 'center' }}>
        <h1>Redux</h1>

        {this.props.loading ? 
        <span>Loading...</span>
        : 
        <span>And my name is {this.props.name}</span>
        }
  
      </div>
    )
  }
}

const ReduxInner = connect(
  mapStateToProps, 
  mapDispatchToProps)(
  ReduxInnerBody
);

export default Redux;