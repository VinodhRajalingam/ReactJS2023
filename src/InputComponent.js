import React from 'react';
import {useState,useRef} from 'react';

function InputComponent() {

  const inputRef = useRef('');
  const [message, setMessage] = useState();
  const [dummymessage, setdummymessage] = useState();

  const formMessage = (event) => {
    setdummymessage(event.target.value);
  };
  const buttonClick = () => {
    setMessage(dummymessage ? dummymessage+', How Are You' : null);
    inputRef.current.value = '';
  }

  return (
    <div className='App' style={{paddingTop : '10px'}}> <h2> Hi {message} </h2>
      <div style={{paddingTop : '20px'}}>
        Enter Your Name : <input type="text" onChange ={formMessage} className='input' ref={inputRef}/>
        <input type="button" onClick={buttonClick} value = "ClickMe" className='button'/>
      </div>
    </div>
  )
}

export default InputComponent