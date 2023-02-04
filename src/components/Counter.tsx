import {useState} from "react";
import classes from './Counter.modules.scss'

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return <>
        <div className={classes.butt}>{count}</div>
        <button onClick={decrement}>minus</button>
        <button onClick={increment}>plus</button>
    </>
}
