import './App.css';
import GenButton from './Components/GenerateButton';
import  Header from './Components/header';
import ToggleControl from './Components/toggleMode'


function App() {

  return (
    <div className="g-chords">
      <ToggleControl/>
      <Header str={"Chords In G Major"}/>
      <GenButton type={"button"} value={"New Progression"} />
    </div>
  );
}

export default App;