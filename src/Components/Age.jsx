import React, { useState } from "react";

function Age() {
    let [age, setAge] = useState(0);

    function incrementAge() {
        setAge((a) => a + 1);
    }

    function reset() {
        setAge((Age = 0));
    }

    return (
        <div className="Age">
            <h2>Updating state with taking previous state</h2>
            <h1>Age: {age}</h1>
            <button onClick={incrementAge}>+1</button>
            <button
                onClick={() => {
                    incrementAge();
                    incrementAge();
                    incrementAge();
                }}
            >
                +3
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Age;
