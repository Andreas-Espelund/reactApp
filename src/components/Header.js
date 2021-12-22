import React from 'react'
import Actionbar from './Actionbar'

export default function Header({onInd, onReg, onPrint, onAbout}) {
    return (
        <div className='header'>
            <h1> SheepApp </h1>
            <Actionbar onInd={onInd} onReg={onReg} onPrint={onPrint} onAbout={onAbout}/>
        </div>
    )
}
