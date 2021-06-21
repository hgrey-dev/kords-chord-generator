import './App.css';
import GenButton from './Components/GenerateButton';
import  Header from './Components/header';
import RandomChordsInG from './Components/KeyOfG';


function App() {

  return (
    <div className="App">
      <Header str={"Chords In G Major"}/>
      <GenButton type={"button"} str={"Add New Progression"}/>
      <RandomChordsInG />
    </div>
  );
}

export default App;
