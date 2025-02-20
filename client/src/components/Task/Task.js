import "./Task.css"
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineEdit } from "react-icons/md"

const Task = ({
  id, userId, title, completed, toggleComplete, deleteTask
}) => {
  return (
    <div className ="Task">
      <label className="Task-clickable-area">
        <input className="Checkbox" type="checkbox" checked={completed} onChange={toggleComplete}/>
        <span className="Custom-Checkbox"></span>
        {completed ? (
          <div className="completed-task-title">
            <s>
              <b>{id}. </b>
              <span>{title}</span>
            </s>
          </div>    
        ) : (
          <div className="incomplete-task-title">
            <b>{id}. </b> 
            <span>{title}</span>
          </div> 
        )}
      </label>
      <MdOutlineEdit className="icon" />
      <RiDeleteBinLine className="icon" onClick={deleteTask}/>
    </div>
  )
}
export default Task