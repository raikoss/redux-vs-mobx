import React from 'react';
import { observer } from 'mobx-react';
import NameForm from '../NameForm';

/**
 * The body of the Mobx component
 */
const MobxInner = ({ store }) => {
  const { name, loading, updateName } = store;
    
  return (
    <div style={{ flex: '1 1 auto', border: '1px solid blue', textAlign: 'center', margin: 10, padding: 5 }}>
      <h1>Mobx</h1>

      <NameForm onClick={name => updateName(name)} />
  
      {loading &&  
      <p>Loading...</p>
      }
      {!loading && name &&
      <p>And my name is {name}, and I really like Mobx!</p>
      }
    </div>  
  )
}

export default observer(MobxInner);