import Individual from "./Individual"

export default function Individuals({individuals}) {
    return (
        <>
        <div className='functionRow'>
        <h3>Individer</h3>
            <div className='buttonRow'> 
                <button className='btnsmall'>Sorter</button>
                <button className='btnsmall'>Filter</button>
                
            </div>
        </div>
        {individuals.map((individual) => 
        <Individual key={individual.id} id={individual.id} gender={individual.gender} weight={individual.weight}/>)}
        </>
    )
}
