import React,{useState} from 'react'

function EditToDo(params) {

    const [updatedToDo,setUpdatedToDo] = useState('');

    const updateToDo = () => {

      params.lists.map((li)=> { 
          return (<div>            
                   {params.task.id === li.id ? li.task = updatedToDo :li}
                   {params.setUpdateState(-1)}         
                 </div>)
        }
    )};

  return (
    <div>
        <input type='text' className='input' defaultValue = {params.task.task} onChange = {(event) => setUpdatedToDo(event.target.value)} ></input>
        <button className='button' onClick={updateToDo}>Update</button>
    </div>
  )
}

export default EditToDo