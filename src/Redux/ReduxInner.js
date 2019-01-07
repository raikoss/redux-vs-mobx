import React from 'react';
import { updateName } from './actions';
import { connect } from 'react-redux';

/**
 * The body of the Redux component
 */
class ReduxInner extends React.Component {
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
        <span>My name is {this.props.name}, and I love Redux!</span>
        }
  
      </div>
    )
  }
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