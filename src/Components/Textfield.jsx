import React, { useState } from "react";

function Textfield() {
    let [input, setInput] = useState("");

    function update(a) {
        setInput(a.target.value);
    }

    function clear() {
        setInput("");
    }

    return (
        <div className="textfiled">
            <h1>Text Field</h1>
            <input placeholder="Type Something..." onChange={update} value={input} className="text"/>
            <h3>You typed: {input}</h3>
            <button onClick={clear}>Clear</button>
        </div>
    );
}

export default Textfield;
