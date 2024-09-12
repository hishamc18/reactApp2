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

    const appClass = isDarkMode ? "dark-mode" : "light-mode";

    return (
        <div className="app">
            <div className={appClass}>
                <div className="components">
                    <Counter />
                    <div className="child">
                        <button onClick={toggleDarkMode} className="dark">
                            {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
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
