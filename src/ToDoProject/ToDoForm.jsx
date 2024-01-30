import React, { useEffect, useState } from 'react'
import './ToDoForm.css'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const ToDoForm = () => {

  const [inputdata,setinputdata] = useState("");
  const [myarray,setmyarray] = useState([])

  let myid = uuidv4();

  const handleinput =(e)=>{
    setinputdata(e.target.value)
  }
  const handleadd =()=>{
    setmyarray([...myarray,{id :myid, task :inputdata}])
  }

  const handleupdate =(index)=>{
    const edittext = prompt("edit your task",myarray[index].task)
    const copyaaray =[...myarray]
    myarray[index].task = edittext
    setmyarray(copyaaray)
  }

  const handledelete =(id)=>{
    const deletedata =myarray.filter(arraydata => arraydata.id != id)
    setmyarray(deletedata)
  }

  return (
    <div className='todomain'>
    <div className='todoform'>
      <h1 className='todohead'>TO-DO-LIST</h1>
        <input onChange={handleinput} type="text" className='todo-input'/>
        <button onClick={handleadd} type='submit'className='todo-btn'>Add</button>
        <div>
          {myarray.map((arraydata,i)=>(
            <div className='addtask' key={i}>
              <p className='mytask'>{arraydata.task}</p>
              <div>
                <FontAwesomeIcon onClick={()=>handleupdate(i)} className='editicon' icon={faPenToSquare}/>
                <FontAwesomeIcon onClick={()=>handledelete(arraydata.id)} className='deleteicon' icon={faTrash}/>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}