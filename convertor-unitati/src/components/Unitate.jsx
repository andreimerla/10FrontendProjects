import React from 'react'
import { useState, useContext } from 'react'
import IstoricContext from './IstoricContext';


const Unitate = ({ type, defaultUnit }) => {

    const [valoare, setValoare] = useState(0);
    const [valoareConvertita, setValoareConvertita] = useState(0);
    const [unitatePrincipala, setUnitatePrincipala] = useState(defaultUnit);
    const [unitateConversie, setUnitateConversie] = useState(defaultUnit);
    const { addIstoric } = useContext(IstoricContext)

    const conversie = () => {
        if (isNaN(valoare)) {
            setValoareConvertita(0);
            alert("Alegeti un numar")
        } else {
            const val = valoare * type[unitatePrincipala][unitateConversie]
            setValoareConvertita(val);
            addIstoric(valoare, unitatePrincipala, val, unitateConversie);
        }

    }
    return (
        <div className='unitate'>
            <input onChange={(e) => { setValoare(e.target.value) }} type="text"></input>
            <select onChange={(e) => { setUnitatePrincipala(e.target.value) }}>
                {Object.keys(type).map(name => {
                    return <option key={name} value={name}>{name}</option>
                })}
            </select>
            <input value={valoareConvertita} type="text" readOnly></input>
            <select onChange={(e) => { setUnitateConversie(e.target.value) }} >
                {Object.keys(type).map(name => {
                    return <option key={name} value={name}>{name}</option>
                })}
            </select>
            <button onClick={conversie}>Conversie</button>

        </div>

    )
}

export default Unitate
