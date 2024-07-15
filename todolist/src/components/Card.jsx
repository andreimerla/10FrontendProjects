import React from 'react'
import { useState } from 'react'
import InputField from './InputField';

const Card = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
    }

    const handleClose = () => {
        setIsPressed(false);
    }
    return (
        <div>
            {!isPressed ? (
                <button onClick={handlePress} className="btn-add-list">+ Add list</button>
            ) : (
                <InputField onClose={handleClose} />
            )}

        </div>
    )
}

export default Card
