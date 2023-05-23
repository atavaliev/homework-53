import React from 'react';

const AddTaskForm = () => {
    return (
        <form className="form-add">
            <input
                type="text"
                placeholder="Add new task"

            />
            <button>Add</button>
        </form>
    );
};

export default AddTaskForm;