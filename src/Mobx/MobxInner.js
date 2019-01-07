import React from 'react';
import { observer } from 'mobx-react';
import Body from '../Body';

/**
 * The body of the Mobx component
 */
const MobxInner = ({ store }) => {
  const { name, loading, updateName } = store;
    
  return (
    <div className='inner' id='mobx-inner'>
      <Body 
        title='Mobx' 
        name={name}
        loading={loading}
        onClick={updateName} 
        nameText={`And my name is ${name}, and I really like Mobx!`} 
      />
    </div>  
  )
}

export default observer(MobxInner);