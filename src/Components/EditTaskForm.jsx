import { useState } from "react";
import Swal from 'sweetalert2'
import { EditDescModal } from './EditDescModal';

export const EditTaskForm = ({editTask, task}) => {
  const [textValue, setTextValue] = useState(task.task)
  const [descValue, setDescValue] = useState(task.desc)
  const [show, setShow] = useState(false);
  const [descText, setDescText] = useState(<span dangerouslySetInnerHTML={{ __html: task.desc }} />)


  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault()

      editTask(textValue,descValue,task.id)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task has been updated",
        showConfirmButton: false,
        timer: 3000,
        toast:true
      });
      setTextValue("")
      setDescValue("")
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
        {
            <div>
                <form className='editTaskForm' onSubmit={handleSubmit}>

                    <input className="form-control" type="text" value={textValue} placeholder=
                    "Update Task..." onChange={e=>{setTextValue(e.target.value)}}/>

                    <button type="click" title='Write a description...' className="form-control desc-btn" onClick={handleClick}>{descText}</button>

                    <button disabled={!textValue} type="submit" className="form-control add-btn">Update</button>
                </form>
            </div>
        }
        {show && <EditDescModal show={show} handleClose={handleClose} textValue={textValue} setDescValue={setDescValue} setShow={setShow} descValue={descValue} setDescText={setDescText}/>}
    </>
)
}
