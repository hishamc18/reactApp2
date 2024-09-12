import React from "react";
import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count + 1);
    }

    function reset() {
        setCount((count = 0));
    }

    return (
        <div className="counter">
            <h1>Incrementing the count using useState</h1>
            <h1>Count: {count}</h1>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
