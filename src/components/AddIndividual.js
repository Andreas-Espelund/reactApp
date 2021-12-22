import { useState } from "react"

export default function AddIndividual({onAdd}) {

    const [id, setId] = useState()
    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState()

    const onSubmit = (e) =>{
        if (!id){
            alert('Legg inn øremerkenummer')
            return 
        }
        if (!gender){
            alert('Legg inn kjønn')
            return
        }
        if (!weight){
            alert('Vil du legge til vekt?')
        }
        console.log('submitting', {id, gender, weight})
        onAdd({id, gender, weight})
        setId('');
        setGender('')
        setWeight('')
    } 

    return (
        <form className='registrationForm'>
            <div className='form-control'>
                <label> Merkenummer</label>
                <input type='text' placeholder='00000' value ={id}
                onChange={(e) => setId(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label className='formLabel'> Kjønn</label>
                <select onChange={(e) => setGender(e.target.value)}
                value ={gender} placeholder='velg'>
                    <option value ='female'> søye </option>
                    <option value ='male'> veir</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Vekt</label>
                <input type='text' placeholder='xx ' value ={weight}
                onChange={(e) => setWeight(e.target.value)}/>
            </div>

            <input className='btn btn-block' type='submit'
            value='Fullfør' onClick={onSubmit}/>
        </form>
    )
}
