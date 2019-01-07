import React from 'react';
import { updateName } from './actions';
import { connect } from 'react-redux';
import Body from '../Body';

/**
 * The body of the Redux component
 */
const ReduxInner = ({ name, loading, updateName }) => {
  return (
    <div className='inner' id='redux-inner'>
      <Body 
        title='Redux'
        name={name}
        loading={loading}
        onClick={updateName}
        nameText={`My name is ${name}, and I love Redux!`}
      />
    </div>
  )
}

// Maps the Redux state to ReduxInner's props
const mapStateToProps = (state, ownProps) => {
  return { ...state };
}

// Maps the UpdateName function to ReduxInner's props, and dispatching it when it gets called
const mapDispatchToProps = ({ updateName });

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(
  ReduxInner
);