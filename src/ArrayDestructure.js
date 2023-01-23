import React,{useState} from 'react'

const ArrayDestructure = () => {
    
  const [data,setData] = useState([{id:0,name:'initialval'}]);
  const displayArray = () => {

    const datas = [{id:1,name:'updatedval'}];
    setData([...data,...datas]);

  }

  return (
    <div className='App' style={{paddingTop:'25px'}}>
      <button onClick={displayArray} className='button'>click me</button>  
       {/* {console.dir('name '+data.map((e)=>{return e.name+' '+e.id}))} */}
       <div>
            {data.map((e) => {
                return <div key={e.id}> {e.name} </div>
             })}
        </div>
    </div>
  )
}

export default ArrayDestructure