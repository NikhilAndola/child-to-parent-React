import React from 'react';
import './style.css';
import { Child1 } from './Child1';
import { UseReducer } from './UseReducer';

export default function App() {
  const [state, setState] = React.useState([]);
  console.log('child to parent using state', state);

  const getData = (param) => {
    let c2pArr = [];
    c2pArr.push(param);
    alert(param);
    console.log('c2pArr', c2pArr);
  };

  return (
    <div>
      <h1>I am Parent!</h1>
      {/* sending setState as a prop to the child component in order to 
   retrieve the value */}
      <Child1 setNum={setState} getData={getData} />
      <UseReducer />
    </div>
  );
}
