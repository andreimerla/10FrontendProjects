import React from 'react'
import { useState, useContext } from "react";
import CardNumberContext from "./CardNumberContext";

const Card = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [isAdded, setIsAdded] = useState(false);
    const [isTaskAdded, setIsTaskAdded] = useState(false);
    const [nameList, setNameList] = useState("");
    const { addCardNumber } = useContext(CardNumberContext)


    const handlePress = () => {
        setIsPressed(true);

    }

    const handleClose = () => {
        setIsPressed(false);
    }


    const handleList = () => {
        setIsAdded(true);
        addCardNumber();
    };

    const handleTaskAdded = () => {
        setIsTaskAdded(true);

    };

    const handleCloseX = () => {
        setIsTaskAdded(false);
    };

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, input]);
            setInput("");
        }
    };
    return (
        <div className="card-comp">
            {!isPressed ? (
                <button onClick={handlePress} className="btn-add-list">+ Add list</button>
            ) : (
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
                            <button onClick={handleClose} className="btn-close">X</button>
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
                                    <button onClick={handleCloseX} className="btn-close">X</button>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}

        </div>
    )
}

export default Card
