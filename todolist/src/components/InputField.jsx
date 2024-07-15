import React, { useState } from 'react';

const InputField = ({ onClose }) => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [isAdded, setIsAdded] = useState(false);
    const [isTaskAdded, setIsTaskAdded] = useState(false);
    const [nameList, setNameList] = useState("");

    const handleList = () => {
        setIsAdded(true);
    };

    const handleTaskAdded = () => {
        setIsTaskAdded(true);
    };

    const handleClose = () => {
        setIsTaskAdded(false);
    };

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, input]);
            setInput("");
        }
    };

    return (
        <div className="input-container">
            {!isAdded ? (
                <>
                    <input
                        onChange={(e) => setNameList(e.target.value)}
                        placeholder="Enter list title..."
                        className="input-field"
                        type="text"
                    />
                    <button className="btn-input" onClick={handleList}>Add list</button>
                    <button onClick={onClose} className="btn-close">X</button>
                </>
            ) : (
                <>
                    <input className="input-field-after" value={nameList} readOnly />
                    {tasks.map((item, index) => (
                        <input key={index} className="task-input" value={item} readOnly />
                    ))}
                    {!isTaskAdded ? (
                        <button onClick={handleTaskAdded} className="task-button">+ Add a card</button>
                    ) : (
                        <>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                className="task-input"
                                placeholder="Enter a title for this card..."
                            />
                            <button onClick={addTask} className="btn-input">Add card</button>
                            <button onClick={handleClose} className="btn-close">X</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default InputField;