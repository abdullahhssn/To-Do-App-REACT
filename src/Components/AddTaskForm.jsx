import React from 'react'
import { useState } from "react";
import Swal from 'sweetalert2'
import { DescModal } from './DescModal';
import { TfiWrite } from 'react-icons/tfi';

export const AddTaskForm = ({addTask, isAdding}) => {

    const [textValue, setTextValue] = useState("")
    const [descValue, setDescValue] = useState("")
    const [show, setShow] = useState(false);
    const [descText, setDescText] = useState(" Write a description...")

    const handleClose = () => setShow(false);
  
    const handleSubmit = (e) => {
      e.preventDefault()

        addTask(textValue,descValue)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task has been added",
            showConfirmButton: false,
            timer: 3000,
            toast:true
          });
        setTextValue("")
        setDescValue("")
        setDescText(" Write a description...")
    }

    const handleClick = (e) => {
      e.preventDefault()
      
      if (!textValue){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter task name!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,  
          });
      } else {
        setShow(true)
    }
  }

    return (
        <>
            {isAdding &&
                <div>
                    <form className='taskForm' onSubmit={handleSubmit}>

                        <input className="form-control" type="text" value={textValue} placeholder=
                        "What is the task today?" onChange={e=>{setTextValue(e.target.value)}}/>

                        <button type="click" title='Write a description...' className="form-control desc-btn" onClick={handleClick}><TfiWrite />{descText}</button>

                        <button disabled={!textValue} type="submit" className="form-control add-btn">Add</button>
                    </form>
                </div>
            }
            {show && <DescModal show={show} handleClose={handleClose} textValue={textValue} setDescValue={setDescValue} setShow={setShow} setDescText={setDescText}/>}
        </>
    )
}
