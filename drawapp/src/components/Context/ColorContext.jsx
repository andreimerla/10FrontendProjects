import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [opacity, setOpacity] = useState("1")
    const [color, setColor] = useState(`rgb(0,0,0,${opacity}`);
    const [lineWidth, setLineWidth] = useState(1);
    const [tool, setTool] = useState(null);
    const [typePointer, setTypePointer] = useState("round")

    const changeTypePointer = (pointer) => {
        setTypePointer(pointer)
    }
    const changeTool = (tool) => {
        setTool(tool);
    }

    const changeColor = (color) => {
        setColor(color);
    }

    const changeLineWidth = (width) => {
        setLineWidth(width)
    }

    useEffect(() => {
        let colors = color.split(",");
        colors[3] = opacity;
        setColor(colors.join(","))
    }, [color, opacity])

    const changeOpacity = (opacity) => {
        setOpacity(opacity)
    }
    return (
        <ColorContext.Provider value={{ color, changeColor, lineWidth, changeLineWidth, changeOpacity, opacity, tool, changeTool, typePointer, changeTypePointer }}>
            {children}
        </ColorContext.Provider>
    )
}

