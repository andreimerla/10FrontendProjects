import React, { useState, useEffect } from 'react';
import styles from './Cursor.module.css';

const Cursor = ({ size = 20, targetElementId }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById(targetElementId);

        const updateCursorPosition = (e) => {
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const isInside =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;

                setIsVisible(isInside);

                if (isInside) {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }
        };

        const updateCursorVisibility = () => {
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const mouseX = position.x;
                const mouseY = position.y;
                setIsVisible(
                    mouseX >= rect.left &&
                    mouseX <= rect.right &&
                    mouseY >= rect.top &&
                    mouseY <= rect.bottom
                );
            }
        };

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('scroll', updateCursorVisibility);
        window.addEventListener('resize', updateCursorVisibility);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('scroll', updateCursorVisibility);
            window.removeEventListener('resize', updateCursorVisibility);
        };
    }, [targetElementId, position]);

    if (!isVisible) return null;

    return (
        <div
            className={styles.cursor}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default Cursor;