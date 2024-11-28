import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2'
import { Addnew } from './Addnew';
import { Header } from './Header'
import { TaskList } from './TaskList';
import { AddTaskForm } from './AddTaskForm';
import { EditTaskForm } from './EditTaskForm'

export const ListWrapper = () => {
    const [tasks, setTasks] = useState([])
    const [isAdding, setIsAdding] = useState(false)

    const addTask = (text, desc) =>{
        setTasks([...tasks,{
        id: uuidv4(), task: text, desc: desc, isEditing: false
        }])
    }

    const deleteTask = id =>{
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        }).then((result) => {
        if (result.isConfirmed) {
            setTasks(tasks.filter(task=>task.id != id))
            swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
            });
        }
        });
    }

    const editTask = id =>{
        setTasks(tasks.map(task => task.id === id ? 
        {...task, isEditing: !task.isEditing} : task
        ))
    }

    const updateTask = (text,desc,id) =>{
        setTasks(tasks.map(task => task.id === id ? 
        {...task, task:text, desc, isEditing: !task.isEditing} : task
        ))
    }

    const toggleIsAdding = () =>{
        setIsAdding(!isAdding)
    }
  return (
    <div className='todoBody'>
        <div className='todo'>
            <Header/>
            <Addnew toggleIsAdding={toggleIsAdding}/>
            <AddTaskForm addTask={addTask} isAdding={isAdding}/>
            {tasks.map((task,index) => ( 
                task.isEditing ? ( <EditTaskForm editTask={updateTask} task={task} />) :
                (<TaskList task={task} key={index} deleteTask={deleteTask} 
                    editTask={editTask} setIsAdding={setIsAdding}/>)
                    
                ))}
                
        </div>
    </div>
  )
}
