import { useState } from 'react';
import './App.css';
import GenButton from './Components/GenerateButton';
import  Header from './Components/header';
import RandomChordsInG from './Components/KeyOfG';


function App() {

  return (
    <div className="g-chords">
      <Header str={"Chords In G Major"}/>
      <GenButton type={"button"} value={"New Progression"} />
    </div>
  );
}

export default App;