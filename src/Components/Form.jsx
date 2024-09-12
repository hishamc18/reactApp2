import React, { useState } from "react";

function Form() {
    let [name, setName] = useState("");
    let [age, setAge] = useState();
    let [showInfo, setShowInfo] = useState(false);

    function updateName(a) {
        setName(a.target.value);
    }

    function updateAge(b) {
        setAge(b.target.value);
    }

    function handleShow() {
        setShowInfo(true);
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <input type="text" value={name} placeholder="Enter Your Name" onChange={updateName} />
            <input type="number" value={age} placeholder="Enter Your Age" onChange={updateAge} />
            <button onClick={handleShow}>Show</button>

            {showInfo && (
                <h3>
                    Hi {name}, You're {age} years Old!
                </h3>
            )}
        </div>
    );
}

export default Form;
