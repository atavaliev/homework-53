import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";

import Task from "./components/Task";
import {fchmod} from "fs";


interface ITask {
    id: string;
    text: string;
    isComplete: boolean;
};

const App = () => {

    const [list, setList] = useState<ITask[]>([
        {id: "1", text: 'Do homework', isComplete: false},
        {id: "2", text: 'Do chores', isComplete: false},
        {id: "3", text: 'Buy milk', isComplete: false}
    ]);
    const [currentTask, setCurrentTask] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newTask: ITask = {id: Date.now().toString(), text: currentTask, isComplete: false};
        setList([...list, newTask]);
        setCurrentTask('');
    };

    const handleRemoveTask = (id: string) => {
        const listCopy = list.filter(task => task.id !== id);
        setList(listCopy);
    }

    const handleTaskComplete = (id: string) => {
        setList(prevList => {
            return prevList.map(task => {
                if (task.id === id) {
                    return {...task, completed: !task.isComplete};
                }
                return task;
            });
        });
    }

    return (
        <div className="App">
            <div className="wrapper">
                <h1>Daily ToDo List</h1>
                <AddTaskForm
                    handleAddTask={handleAddTask}
                    currentTask={currentTask}
                    onInputChange={handleInputChange}
                />

                {list.length > 0
                    ? (<div className="task-list">
                        {
                            list.map(l => {
                                return <Task
                                    key={l.id + l.text}
                                    id={l.id}
                                    text={l.text}
                                    onRemovePerson={() => handleRemoveTask(l.id)}
                                    onTaskComplete={() => handleTaskComplete(l.id)}
                                />
                            })
                        }
                    </div>)
                    : <div className="no-task">There is no any Active Task</div>
                }
            </div>
        </div>
    );
}

export default App;
