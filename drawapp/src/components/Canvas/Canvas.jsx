import React, { useRef, useState, useContext, useEffect } from 'react';
import styles from './Canvas.module.css';
import { ColorContext } from '../Context/ColorContext';
import Cursor from '../Cursor/Cursor';
const Canvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const { color, lineWidth, tool, typePointer } = useContext(ColorContext);
    const [size, setSize] = useState(lineWidth);
    const [cursor, setCursor] = useState("default");

    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color;
            contextRef.current.lineWidth = lineWidth;
            contextRef.current.lineCap = typePointer;


        }
        console.log(tool);
        switch (tool) {
            case null: setCursor("default"); break;
            default: setCursor("none"); break;
        }
        setSize(lineWidth)

    }, [color, lineWidth, tool, typePointer])

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1000 * 2;
        canvas.height = 800 * 2;
        canvas.style.width = '1000px';
        canvas.style.height = '800px';
        canvas.style.backgroundColor = "white"
        const context = canvas.getContext('2d');
        context.scale(2, 2);
        context.lineCap = typePointer;
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        contextRef.current = context;

        return () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    const handleStartDrawing = (e) => {

        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const handleStopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const handleStopDrawingOnMouseOut = () => {
        if (tool === "pencil") {
            contextRef.current.closePath();
            setIsDrawing(false);
        }

    }

    const draw = (e) => {
        if (!isDrawing) return;

        const { offsetX, offsetY } = e.nativeEvent;
        const canvas = canvasRef.current;


        if (tool === "pencil") {
            if (offsetX < 0 || offsetY < 0 || offsetX > canvas.width || offsetY > canvas.height) {
                setIsDrawing(false);
                contextRef.current.closePath();
                return;
            }
            contextRef.current.lineTo(offsetX, offsetY)
            contextRef.current.stroke()
        } if (tool === "eraser") {
            contextRef.current.strokeStyle = "white"
            contextRef.current.lineTo(offsetX, offsetY)
            contextRef.current.stroke()
        }





    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'my-drawing.png';
        link.click();
    };

    const handleClear = () => {
        const context = contextRef.current
        context.beginPath();
        context.rect(0, 0, 1000, 800);
        context.fillStyle = "white";
        context.fill();
    }

    return (
        <div className={styles.container}>
            <canvas
                id="target"
                onMouseDown={handleStartDrawing}
                onMouseUp={handleStopDrawing}
                onMouseMove={draw}
                onMouseOut={handleStopDrawingOnMouseOut}


                ref={canvasRef}
                className={styles.canvas}
                style={{ cursor: cursor }}
            />
            {tool && <Cursor size={size} targetElementId="target" />}
            <div className={styles.buttonContainer}>
                <button className={styles.buttonStyle} onClick={handleDownload}>Download</button>
                <button className={styles.buttonStyle} onClick={handleClear}>Clear Canvas</button>
            </div>


        </div>
    );
};

export default Canvas;
