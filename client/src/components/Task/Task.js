import "./Task.css"
import { RiDeleteBinLine } from 'react-icons/ri'

const Task = ({
  id, userId, title, completed, toggleComplete
}) => {
  return (
    <div className ="Task">
      <label className="Task-clickable-area">
        <input className="Checkbox" type="checkbox" checked={completed} onChange={toggleComplete}/>
        <span className="Custom-Checkbox"></span>
        {completed ? (
          <div className="completed-task-title">
            <s>
              <b>{id}.{userId}</b>
              <span>{title}</span>
            </s>
          </div>    
        ) : (
          <div className="incomplete-task-title">
            <b>{id}.{userId}</b> 
            <span>{title}</span>
          </div> 
        )}
      </label>
      <RiDeleteBinLine className="delete-icon" />
    </div>
  )
}
export default Task