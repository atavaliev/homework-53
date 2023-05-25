import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";

import Task from "./components/Task";


interface ITask {
    id: string,
    text: string
}

const App = () => {

    const [list, setList] = useState<ITask[]>([
        {id: "1", text: 'Do homework'},
        {id: "2", text: 'Do chores'},
        {id: "3", text: 'Buy milk'}
    ])

    return (
        <div className="App">
            <div className="wrapper">
                <h1>Daily ToDo List</h1>
                <AddTaskForm/>

                <div className="task-list">
                    {list.map(l => {
                        return <Task key={l.id + l.text} id={l.id} text={l.text}/>
                    })}
                </div>

            </div>
        </div>
    );
}

export default App;
