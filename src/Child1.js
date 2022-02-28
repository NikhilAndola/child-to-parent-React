import React from 'react';

export const Child1 = (props) => {
  const { childToParent, setNum } = props;
  let arr1 = [1, 2, 3, 4, 5];

  //Passing array to the parent component
  React.useEffect(() => {
    setNum(arr1);
  }, []);

  return (
    <div>
      <h3> Am Child component</h3>
    </div>
  );
};
