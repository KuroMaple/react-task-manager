import React, {useState, useEffect} from 'react'
import Task from './Task/Task'

const Home = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(response => response.json())
    .then(data => setTasks(data))

  }, [])

  useEffect(() => {
    console.log('Parent state updated:', tasks);
  }, [tasks])

  const toggleComplete = (changedTaskId)  => {
    console.log("updating task id: ", changedTaskId)
    const newTasks = tasks.map((task) =>{
      if(task.id === changedTaskId){
        task.completed = !task.completed // Update complete value for specifc task
      }
      return task
    })
    setTasks(newTasks)
  }
  
  return (
    <div>
      {tasks.map(task => {
        return <Task 
        key={task.id} 
        toggleComplete={() => toggleComplete(task.id)} 
        {...task} />
      })}
    </div>
  )
}
export default Home