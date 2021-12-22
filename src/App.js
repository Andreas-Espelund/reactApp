import logo from './logo.svg';
import Header from './components/Header';
import Individuals from './components/Individuals';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import AddIndividual from './components/AddIndividual';

function App() {
  //list of individuals
  const [individuals, setIndividuals] = useState([
    {
      id : 80043,
      gender : 'female',
      weight : 56  
    }
  ]) 
  const [currentView, setCurrenView] = useState('individuals')


  const onInd = () => {
    console.log('individuals menu view')
    setCurrenView('individuals')
  }
  const onReg = () => {
    console.log('registration menu view')
    setCurrenView('registration')
  }
  const onPrint= () => {
    console.log('print menu view')
    setCurrenView('print') 
  }
  const onAbout = () => {
    console.log('about menu view')
    setCurrenView('about') 
  }

  const addTask = (task) =>{
    console.log('Added',task)
    setIndividuals([...individuals, task])
  }
  return (
    <div className='container'>
      <Header onInd={onInd} onReg={onReg} onPrint={onPrint} onAbout={onAbout}/>
      
      {currentView === 'individuals' ? 
        <Individuals individuals={individuals}/>:
        currentView === 'registration' ?
          <AddIndividual onAdd={addTask}/> :
          currentView === 'print' ? 
            <h3>prnt</h3> :
            <About/>}
      <Footer/>
    </div>
  );
}
export default App;
