import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function ArrayComponent() {

const [rajiniFilms,setRajiniFilms] = useState([{
    id: uuidv4(),
    task : 'Petta',
    isChecked : false
  },
  {
    id: uuidv4(),
    task : 'Darbar',
    isChecked : false
  }]);

  const handleCheckBox = (filmId) => {
    const newList = rajiniFilms.map((e) => {return filmId === e.id ? {...e, isChecked : !e.isChecked} : e})
    setRajiniFilms (newList);
  };

  return (
    <div className='App'>
      {  
          rajiniFilms.map((rajiniFilm)=>{
            return <div key={rajiniFilm.id}>
                        <input type="checkbox" onClick={() => handleCheckBox(rajiniFilm.id)}/>
                        <h2>{rajiniFilm.task}</h2>
                   </div>     
        })
       }
    </div>
  )
}
export default ArrayComponent