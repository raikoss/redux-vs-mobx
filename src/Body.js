import React from 'react';
import NameForm from './NameForm';

const Body = (props) => {
  return (
    <>
    <h1>{props.title}</h1>

    <NameForm onClick={props.onClick} />

    {props.loading &&  
    <p>Loading...</p>
    }
    {!props.loading && props.name &&
    <p>{props.nameText}</p>
    }
    </>
  )
}

export default Body;