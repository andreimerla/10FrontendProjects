import React from 'react'
import Unitate from './Unitate'
import { factorConversieBani, factorConversieLungime, factorConversieAri, factorConversieMasa, factorConversieVolum } from '../utils/conversie'
import Istoric from './Istoric'

const Convertor = () => {
    return (
        <div className="container">
            <Unitate type={factorConversieLungime} defaultUnit={"metri"} />
            <Unitate type={factorConversieBani} defaultUnit={"leu"} />
            <Unitate type={factorConversieAri} defaultUnit={"hectare"} />
            <Unitate type={factorConversieMasa} defaultUnit={"kilograme"} />
            <Unitate type={factorConversieVolum} defaultUnit={"litri"} />
            < Istoric />

        </div>
    )
}

export default Convertor
