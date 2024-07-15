import React from 'react'
import IstoricContext from './IstoricContext';
import { useContext } from 'react';
const Istoric = () => {
    const { istoric, stergeIstoric } = useContext(IstoricContext);

    return (
        <div className="istoric">
            <button onClick={stergeIstoric}>Delete Istoric</button>
            <ul>
                {istoric.map((item) => {
                    return (<li className="istoricElement" key={Math.random}>
                        {item};
                    </li>)
                })}
            </ul>

        </div>
    )
}

export default Istoric
