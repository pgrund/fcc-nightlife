import React from 'react';

const Test = ({}) => {
  const handleClick = () => {alert('test');};
  return (
    <div onClick={handleClick}>TEST</div>
  );
}

export default Test;
