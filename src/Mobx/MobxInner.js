import React from 'react';
import { observer } from 'mobx-react';

/**
 * The body of the Mobx component
 */
class MobxInner extends React.Component {
  componentDidMount() {
    this.props.store.updateName('DannyBoy');
  }

  render() {
    const { name, loading } = this.props.store;
    
    return (
      <div style={{ flex: '1 1 auto', border: '1px solid blue', textAlign: 'center' }}>
        <h1>Mobx</h1>
    
        {loading ? 
        <span>Loading...</span>
        :
        <span>And my name is {name}, and I like Mobx!</span>
        }
      </div>  
    )
  }
}

export default observer(MobxInner);