import { useState } from "react";

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue)

    function handleClickIncrement(value) {
        setCount(count + value)
    }
    function handleClickMultiplier(value) {
        setCount(Math.floor(count * value))
    }
    return (
        <>
            <h2>Count: {count}</h2>

            <button onClick={() => { handleClickIncrement(1) }}>Increment</button>
            <button onClick={() => { handleClickIncrement(-1) }}>Decrement</button>
            <button onClick={() => { handleClickMultiplier(2) }}>Double</button>
            <button onClick={() => { handleClickMultiplier(1 / 2) }}>Half</button>

        </>
    )
}

export default Counter