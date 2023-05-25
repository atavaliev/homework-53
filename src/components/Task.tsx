import React from 'react';
import IconTrash from "./icons/IconTrash";

interface ITask {
    id: string,
    text: string
}

const Task: React.FC<ITask> = () => {
    return (
        <div className="task-item">
            <p className="task-item--text">Byu Milk</p>
            <span className="icon-delete">
                <IconTrash/>
            </span>
        </div>
    );
};

export default Task;