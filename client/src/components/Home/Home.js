import React, {useState, useEffect} from 'react'
import Task from '../Task/Task'
import "./Home.css"
const Home = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(response => response.json())
    .then(data => setTasks(data))
  }, [])

  const toggleComplete = (changedTaskId)  => {
    const newTasks = tasks.map((task) =>{
      if(task.id === changedTaskId){
        task.completed = !task.completed // Update complete value for specifc task
      }
      return task
    })
    setTasks(newTasks)
  }

  const deleteTask = (changedTaskId)  => {
    const newTasks = tasks.filter(task => task.id !== changedTaskId)
    setTasks(newTasks)
  }
  
  const getRandomId = () => {
    return Math.floor(Math.random() * 99) + 1
  }

  const addBlankTask = () => {
    let uniqueRandomId
    do {
      uniqueRandomId = getRandomId()
    } while (
      tasks.some(task => task.id === uniqueRandomId)
    )
    const newTask = 
    {
      id: uniqueRandomId,
      userId: uniqueRandomId,
      title: "Click here to edit",
      completed: false
    }
    setTasks([...tasks, newTask])
  }
  
  return (
    <div
    className="outer-container"
    >
      <div
        className="tasks-container">
        {tasks.map(task => {
          return <Task 
          key={task.id} 
          toggleComplete={() => toggleComplete(task.id)}
          deleteTask={() => deleteTask(task.id)} 
          {...task} />
        })}
      </div>
      <button
          className="new-button"
          onClick={addBlankTask}
        > 
          + New Task
        </button>
    </div>
  )
}
export default Home