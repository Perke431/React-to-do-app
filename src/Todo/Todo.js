import React from "react";
import './Todo.css';

const Todo = ({value, action}) => {
    return(
        <div className='field'>
            <span>{value}</span>
            <button 
            onClick={(e)=>{e.target.parentNode.style.opacity = '0.5';}} 
            className='check'>Check</button>
            <button onClick={action} className='delete'>Delete</button>
            </div>
    )
}

export default Todo;