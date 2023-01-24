import React,{useEffect,useState} from 'react'
import Axios from 'axios'

function BootCall() {
  const [dataFromBoot, setDataFromBoot] = useState('');
  const [dataFromPostCall, setDataFromPostCall] = useState([]);

  useEffect(()=>{ 
     Axios.get("http://localhost:8080/welcome/Vinod/Rajalingam") 
          .then(response => setDataFromBoot(response.data));
    
     Axios.post('http://localhost:8080/customer' , {
          firstName: 'Fred',
          lastName: 'Chris'
        }  
        )
        .then(function (response) {
          setDataFromPostCall([...response.data]);
        })
        .catch(function (error) {
          console.log(error);
          setDataFromPostCall(error.data)
        }); 
  },[])
  return (
    <div className='App' style={{paddingTop : '30px'}}>
      <h1>{dataFromBoot}</h1>
      <h2>{dataFromPostCall.map((e,id) => {return <div key={id}>{e.firstName} {e.lastName}</div>})}</h2>
    </div>
  )
}

export default BootCall