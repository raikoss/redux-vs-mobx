import React from 'react';
import { observer } from 'mobx-react';
import MobxState from './State';

const store = new MobxState();

const Mobx = observer(props => {
  return (
    <MobxInner store={store} />
  )
})

class MobxInnerBody extends React.Component {
  componentDidMount() {
    this.props.store.updateName('DannyBoy');
    console.log(this.props.store);
  }

  render() {
    const { name, loading, error } = this.props.store;
    
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

const MobxInner = observer(MobxInnerBody);

export default Mobx;