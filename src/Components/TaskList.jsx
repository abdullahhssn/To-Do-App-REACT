import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";


export const TaskList = ({task, deleteTask, editTask, setIsAdding}) => {

  
  // function MyComponent() {
  //   return <div class="blog_content" dangerouslySetInnerHTML={blog.content} />;
  // }

  return (
    <div>
        <div id="tasks">
            <div>
                <span className="fw-bold">{task.task}</span>
                {/* <span>{task.desc}</span> */}
                <span dangerouslySetInnerHTML={{ __html: task.desc }} />
                <span className="options">
                <MdEdit className='edit-icon' onClick={()=>{editTask(task.id);setIsAdding(!setIsAdding)}} />
                <MdDelete className='delete-icon' onClick={()=>deleteTask(task.id)} />
                </span>
            </div>
        </div>
    </div>
  )
}