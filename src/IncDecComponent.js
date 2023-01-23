import React from 'react';
import {useState} from 'react';

export default function IncreaseDecreaseComponent() {
  
  const [value,setValue] = useState(0);

  const IncrementFunction = () => {
    setValue(value + 1);
  };

  const DecrementFunction = function() {
      setValue(value - 1);
  };

  const ResetFunction = () => {
    setValue(0);
  };
  
  return (
    <div className='App'>

      <div><h1>{value}</h1></div>
      <button onClick={IncrementFunction} className = 'button'>Increase</button>
      <button onClick={DecrementFunction} className = 'button'>Decrease</button>
      <button onClick={ResetFunction} className = 'button'>Set to Zero</button>

    </div>
  )
}