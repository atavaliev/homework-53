import React, {useState} from 'react';

interface IAddTaskForm {
    handleAddTask: React.MouseEventHandler;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    currentTask: string;
}

const AddTaskForm: React.FC<IAddTaskForm> = ({handleAddTask, currentTask, onInputChange}) => {
    return (
        <div
            className="form-add"
        >
            <input
                type="text"
                placeholder="Add new task"
                onChange={onInputChange}
                value={currentTask}
            />
            <button
                onClick={(e) => handleAddTask(e)}
                disabled={currentTask.length < 1}
            >Add</button>
        </div>
    );
};

export default AddTaskForm;