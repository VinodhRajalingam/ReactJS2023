import React,{useState,useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import EditToDo from './EditToDo'

function UpdatedToDo() {

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
      task : toDo,
      isChecked : false
    }; 
    
   toDo ? formList(tasks) : setTodoList([...toDoList]);
}
const handleCheckbox = (id) => {

    const newList = toDoList.map((toDo) => { 
        return id === toDo.id ? {...toDo, isChecked : !toDo.isChecked} : toDo
    })
    setTodoList(newList)
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
                  <div>
                    {e.isChecked}
                  <input type = "checkbox" 
                         checked = {e.isChecked} 
                         onChange = {() => handleCheckbox(e.id)} 
                  >
                  </input>
                  <span className = { e.isChecked === true ? 'checked-item' : 'not-checked-item'}>{e.task}</span>
                  <button onClick = {() => editToDo(e.id)} className='button'>Edit</button>
                  <button onClick = {() => removeToDo(e.id)} className='button'>Remove</button> 
                  </div>} 
                  </div>)
             })}
        </div>       
    </div>
  )
}

export default UpdatedToDo