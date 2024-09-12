import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Age from "./Components/Age";
import Textfield from "./Components/Textfield";
import Checkbox from "./Components/Checkbox";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const appClass = isDarkMode ? "app dark-mode" : "app light-mode";

    return (
        <div className={appClass}>
            <button onClick={toggleDarkMode} className="dark">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div className="app">
                <div className="components">
                    <Counter />
                    <Age />
                    <Textfield />
                    <Checkbox />
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;
