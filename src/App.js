import React from 'react';
import './style.css';
import { Child1 } from './Child1';

export default function App() {
  const [state, setState] = React.useState([]);
  console.log(state);

  return (
    <div>
      <h1>I am Parent!</h1>
      {/* sending setState as a prop to the child component in order to 
   retrieve the value */}
      <Child1 setNum={setState} />
    </div>
  );
}
