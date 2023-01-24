import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import InputComponent from './InputComponent.js';
import IncreaseDecreaseComponent from './IncDecComponent';
import ArrayComponent from './ArrayComponent.js';
import ArrayFilter from './ArrayFilter.js';
//import ToDoComponent from './ToDoComponent';  
//import ArrayDestructure from './ArrayDestructure';
import ToDoEditComponent from './ToDoEditComponent';
import BootCall from './BootCall';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  <Router>
  <div><br/><br/></div>
  <div className='App'>
      <Link to={'/'}></Link>
      <Link to={'/input'}>Input</Link> | 
      <Link to={'/IncreaseDecreaseComponent'}> IncreaseDecreaseComponent</Link> |
      <Link to={'/ArrayComponent'}> ArrayComponent</Link> |
      <Link to={'/ArrayFilter'}> ArrayFilter</Link> |
{/*   <Link to={'/ToDoComponent'}> ToDoComponent</Link> | 
      <Link to={'/ArrayDestructure'}> ArrayDestructure</Link> | */} 
      <Link to={'/ToDoEditComponent'}> ToDoComponent</Link> | 
      <Link to={'/BootCall'}> BootCall</Link></div>
    <Routes>
      <Route path='/' element=''></Route>
      <Route path='/input' element = {<InputComponent/>}></Route>
      <Route path='/IncreaseDecreaseComponent' element = {<IncreaseDecreaseComponent/>}></Route>
      <Route path='/ArrayComponent' element = {<ArrayComponent/>}></Route>
      <Route path='/ArrayFilter' element = {<ArrayFilter/>}></Route>
{/*       <Route path='/ToDoComponent' element = {<ToDoComponent/>}></Route>
      <Route path='/ArrayDestructure' element = {<ArrayDestructure/>}></Route> */}
      <Route path='/ToDoEditComponent' element = {<ToDoEditComponent/>}></Route>
      <Route path='/BootCall' element = {<BootCall/>}></Route>
    </Routes>
  </Router>
  </React.StrictMode>
);