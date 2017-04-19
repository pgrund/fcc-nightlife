import React from 'react';

const Test = ({}) => {
  const handleClick = () => {alert('da');};
  return (
    <div onClick={handleClick}>TEST</div>
  );
}

export default Test;
