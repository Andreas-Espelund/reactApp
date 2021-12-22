import React from 'react'

export default function Individual({id, gender, weight}) {
    return (
        <div className='individual'>
            <h3>{id}</h3>
            <p>{gender} {weight}</p>            
        </div>
    )
}
