// import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Day out',
      day: 'Feb 6th at 3:30pm',
      reminder: true,
    },
  ])
  // const name = 'Brad'
  // const x = false;
  // 

  // addTask
  const addTask = (task) => {
    console.log(task);
  }

  // delete task function
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
      {/* passing argument by title hello */}
      {/* <h2>Hello {x ? 'Yes' : 'No'}</h2> */}
    </div>
  )
}

// extends cause we need lifecycle methods 
// class App extends React.Component {
//   // render takes care of output
//   render() {
//     return <h1>Hello frim a class</h1>
//   }
// }

export default App
