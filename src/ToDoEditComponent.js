import React,{useState,useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import EditToDo from './EditToDo'

function ToDoEditComponent() {

const [toDo, setTodo] = useState('');
const inputRef = useRef(null);
const [toDoList, setTodoList] = useState([]);
const [updateState, setUpdateState] = useState(-1);
//const [checked, setChecked] = useState([]);

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

/* const handleCheck = (event) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
}; */

/* const strikeThroughToDo = {
   textDecor : checked ? {fontSize:'25px', fontWeight : 'bold' , textDecoration: 'line-through'} : 
                         {fontSize:'25px', fontWeight : 'bold'}
} */
/* var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item"; */

    
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
                  <div>
                  {/* <input type="checkbox" value = {e.task} onChange = {handleCheck} style={{paddingLeft:'15px' , width : '25px'}}></input> */}
                  {/* <span style={strikeThroughToDo.textDecor}>{e.task}</span> */}
                  {/* <span className={isChecked(e.task)}>{e.task}</span> */}
                  <span>{e.task}</span>
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