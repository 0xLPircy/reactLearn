import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks

// notes
// instead of defining outside component, we can use 'useState'
//  import { useState } froom 'react'
// const Tasks = () => {
//     const [tasks, setTasks] = ([
//         {
//             id:1,
//             text: 'Doctors app',
//             day: 'feb 5th at 2:30',
//             reminder: true,
//         },
//     ])
// }
// note state is immutable cant do 'tasks.push()', you have to recreate it and then send it back so setTasks()