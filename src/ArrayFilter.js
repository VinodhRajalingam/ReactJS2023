import React,{useState,useEffect} from 'react'
import {rajiniFilms} from './ArrayComponent.js'

function ArrayFilter() {

  const [starFilms,setStarFilms] = useState([]);
  
  useEffect(() => {
    setStarFilms(rajiniFilms.filter((name) => !"2.0".includes(name)));
  },[])

  return (
      <div className='App'>
        {  
            starFilms.map((rajiniFilm)=>{
              return <div key={rajiniFilm}><h2>{rajiniFilm}</h2></div>     
          })
         }
      </div>
    )
}

export default ArrayFilter