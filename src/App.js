import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo/Todo';



function App() {

  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([])


  const handleNewTodo = () => {
    setTodoList(previous => [...previous, value]);
    setValue('');
  }

  const handleRemoveTodo = (index) => {
    let arr = [...todoList];
    arr.splice(index,1);
    setTodoList(previous => previous = [...arr]);
  }

  useEffect(()=>{localStorage.clear(); localStorage.setItem('todoList', JSON.stringify(todoList));},[todoList]);


  return (
    <div className='container'>
      <div className='input-field'>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder='Type new To Do' type='text'></input>
        <button onClick={handleNewTodo}>Create new</button>
      </div>
      <div className='input-list'>
            {
              todoList.map((todo,index) => {
                return <Todo key={index} value={todo} action={()=>{handleRemoveTodo(index)}}></Todo>
              })
            }
      </div>
    </div>
  );
}

export default App;
