// Tasks have form:
// completed, id, userid, title

import Checkbox from '../Checkbox'
import "./Task.css"

const Task = ({
  id, userId, title, completed, toggleComplete
}) => {
  return (
    <div className ="Task">
      <Checkbox 
        checked={completed}
       onChange={toggleComplete}
      />
      <h3>
        {id}.{userId}
      </h3>
      <p>{title}</p>
    </div>
  )
}
export default Task