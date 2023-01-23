import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function ToDoComponent() {

const [toDo, setTodo] = useState('');
const [toDoList, setTodoList] = useState([]);
const getToDo = (event) =>   { 
  setTodo(event.target.value)
}
const addToDo = () => {
    const tasks = {
      //id:toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id+1,
      id: uuidv4(),
      task : toDo
    }; 
    toDo ? setTodoList([...toDoList,tasks]) : setTodoList([]);
}
const removeToDo = params => setTodoList(toDoList.filter((name)=>!params.includes(name.id)));

const editToDo = (params) => {
    console.log(params);
};
    
  return (
    <div className='App' style={{
      paddingTop: '50px',
      boxSizing: 'content-box',
    }}>
        <input type='text' onChange={getToDo} className='input'></input> 
        <button className='button' onClick={addToDo}>Add ToDo</button>  
        <div>
            {toDoList.map((e) => {
                return <div key={uuidv4()} className='toDoLists'> {e.task} 
                       <button onClick={()=>editToDo(e.id)} className='button'>Edit</button>
                       <button onClick={()=>removeToDo(e.id)} className='button'>Remove</button> 
                       </div>

             })}
        </div>
        
    </div>
  )
}

export default ToDoComponent