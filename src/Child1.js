import React from 'react';

export const Child1 = (props) => {
  const { getData, setNum } = props;
  let arr1 = [1, 2, 3, 4, 5];

  //Passing array to the parent component
  React.useEffect(() => {
    setNum(arr1);
  }, []);

  let child2parent = 'batman and superman';

  let arrayFromChild = ['mango', { name: 'superman' }];

  return (
    <div>
      <h3> Am Child component</h3>
      <button onClick={() => getData(child2parent)}>Click me</button>
      <button onClick={() => getData(arrayFromChild)}>Click me2</button>
    </div>
  );
};
