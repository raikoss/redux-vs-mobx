import React from 'react';
import { updateName } from './actions';
import { connect } from 'react-redux';
import NameForm from '../NameForm';

/**
 * The body of the Redux component
 */
const ReduxInner = ({ name, loading, updateName }) => {
  return (
    <div style={{ flex: '1 1 auto', border: '1px solid red', textAlign: 'center', margin: 10, padding: 5 }}>
      <h1>Redux</h1>

      <NameForm onClick={updateName} />

      {loading &&  
      <p>Loading...</p>
      }
      {!loading && name &&
      <p>My name is {name}, and I love Redux!</p>
      }

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