import React from 'react';
import './App.css';
import Child from './Child'

function Parent(props) {
  return (
    <div>
      Hello from Parent
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;
