import { useState, useContext, createContext } from "react"

const IstoricContext = createContext();

export const IstoricProvider = ({ children }) => {
    const [istoric, setIstoric] = useState([])

    const addIstoric = (valoare, unitate, valoareaConvertita, unitateConversie) => {
        setIstoric(prevIstoric => [...prevIstoric, `${valoare} ${unitate}->${valoareaConvertita} ${unitateConversie}`]);
    }
    const stergeIstoric = () => {
        setIstoric([]);
    }

    const seeIstoric = () => {
        for (const item of istoric) {
            console.log(item)
        }
    }
    return (
        <IstoricContext.Provider value={{ istoric, addIstoric, stergeIstoric, seeIstoric }}>
            {children}
        </IstoricContext.Provider>
    )
}

export default IstoricContext
