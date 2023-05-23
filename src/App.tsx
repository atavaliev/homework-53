import React from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";

function App() {
    return (
        <div className="App">
            <div className="inner">
                <h1>Daily ToDo List</h1>
                <AddTaskForm/>
            </div>
        </div>
    );
}

export default App;
