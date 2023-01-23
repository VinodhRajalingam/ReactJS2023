import React,{useState,useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import EditToDo from './EditToDo'

function ToDoEditComponent() {

const [toDo, setTodo] = useState('');
const inputRef = useRef(null);
const [toDoList, setTodoList] = useState([]);
const [updateState, setUpdateState] = useState(-1);

const formList = (tasks) =>  {
  setTodoList([...toDoList,tasks]);
  setTodo('');
  inputRef.current.value = '';
};

const addToDo = () => {
    const tasks = {
      id: uuidv4(),
      task : toDo
    }; 

   toDo ? formList(tasks) : setTodoList([...toDoList]);
}
const removeToDo = params => setTodoList(toDoList.filter((name)=>!params.includes(name.id)));

const editToDo = (params) => {
    setUpdateState(params);
};
    
  return (
    <div className='App' style={{
      paddingTop: '50px',
      boxSizing: 'content-box',
    }}>
        <input type='text' onChange={(event) => setTodo(event.target.value)} className='input' ref={inputRef}></input> 
        <button className='button' onClick={addToDo}>Add ToDo</button>  
        <div>
            {toDoList.map((e) => {
                return (
                  <div key={uuidv4()} className='toDoLists'> 
                  {updateState === e.id ? <EditToDo task = {e} lists = {toDoList} setUpdateState = {setUpdateState} /> : 
                  <div>{e.task}
                  <button onClick={()=>editToDo(e.id)} className='button'>Edit</button>
                  <button onClick={()=>removeToDo(e.id)} className='button'>Remove</button> 
                  </div> } 
                  </div>)

             })}
        </div>
        
    </div>
  )
}

export default ToDoEditComponent