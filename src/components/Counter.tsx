import {useState} from "react";
import './Counter.scss'

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return <>
        <div style={{
            fontSize: '50px'
        }}>{count}</div>
        <button onClick={decrement}>minus</button>
        <button onClick={increment}>plus</button>
    </>
}
