import React from 'react';
import MobxState from './State';
import MobxInner from './MobxInner';

const store = new MobxState();

const Mobx = () => {
  return (
    <MobxInner store={store} />
  )
}

export default Mobx;