import React, { Component } from 'react';

class NameForm extends Component {
  state = {
    name: ''
  }

  render() {
    return (
      <>
        <span>Enter your name: </span><input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

        <button onClick={() => this.props.onClick(this.state.name)}>Update name!</button>
      </>
    )
  }
}

export default NameForm;