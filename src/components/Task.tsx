import React from 'react';
import IconTrash from "./icons/IconTrash";

interface ITask {
    id: string;
    text: string;
    onRemovePerson: React.MouseEventHandler;
    onTaskComplete: (id: string) => void;
};

const Task: React.FC<ITask> = ({id, text, onRemovePerson,onTaskComplete}) => {
    return (
        <div className="task-item">
            <input
                type="checkbox"
                name="isComplete"
                onChange={() => onTaskComplete(id)}
            />
            <p className="task-item--text">{text}</p>
            <span
                className="icon-delete"
                onClick={onRemovePerson}
            >
                <IconTrash/>
            </span>
        </div>
    );
};

export default Task;