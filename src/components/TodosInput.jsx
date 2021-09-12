import { useState } from 'react'
import { nanoid } from 'nanoid'

function TodosInput({ handleAdd }) {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        // console.log("Changed", e.target.value);
        setText(e.target.value)
    }

    const handleClick = () => {
        const task = { status: false, title: text, id: nanoid() }
        // setList([...list, task])
        handleAdd(task)
        setText("")
    }

    return (
        <div className="inputDiv">
            <input value={text} onChange={handleChange} type="text" placeholder="Task" />
            <button className="addBtn" onClick={handleClick}>+</button>
        </div>
    )
}

export default TodosInput;