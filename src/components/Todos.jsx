import { useState } from 'react'
import TodosInput from './TodosInput'

export default function Todos() {
    const [list, setList] = useState([])

    const handleAddToDo = (task) => {
        setList([...list, task])
    }

    const handleToggle = (name) => {
        let newList = list.map(task => {
            return task.title === name ? { ...task, status: !task.status } : { ...task }
        })

        setList(newList)
    }

    const handleDelete = (name) => {
        let newList = list.filter(task => {
            return task.title !== name
        })

        setList(newList)
    }

    // console.log(list);
    return (
        <div className="ToDo">
            <h2>To Do List</h2>
            < TodosInput handleAdd={handleAddToDo} />
            {
                list.map((task) => (
                    <div className={task.status ? "done eachTask" : "notDone eachTask"}>
                        <div className="text" onClick={() => handleToggle(task.title)}>{task.title}</div> <div className="deleteBtn" onClick={() => handleDelete(task.title)}>❌</div>
                    </div>
                ))
            }
        </div>
    )
}

