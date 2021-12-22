import React from 'react'

export default function Actionbar({onInd, onReg, onPrint, onAbout}) {
    return (
        <div className='buttonRow'>
            <button className='btn' onClick={onInd}> Individer</button>
            <button className='btn' onClick={onReg}> Registrer</button>
            <button className='btn' onClick={onPrint}> Utskrift</button>
            <button className='btn' onClick={onAbout}> Om</button>
            

            
        </div>
    )
}
