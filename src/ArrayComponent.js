import React from 'react'

export const rajiniFilms = ['Petta','Darbar','2.0','Padayappa','Basha'];

function ArrayComponent() {

  return (
    <div className='App'>
      {  
          rajiniFilms.map((rajiniFilm)=>{
            return <div key={rajiniFilm}><h2>{rajiniFilm}</h2></div>     
        })
       }
    </div>
  )
}
export default ArrayComponent