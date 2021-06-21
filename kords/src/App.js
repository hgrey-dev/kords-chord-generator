import './App.css';
import GenButton from './Components/GenerateButton';
import  Header from './Components/header';
import RandomChordsInG from './Components/KeyOfG';


function App() {

  return (
    <div className="App">
      <Header/>
      <GenButton type={"button"} value={"Click Me Bitch"} str={"click me"}/>
      <RandomChordsInG />
    </div>
  );
}

export default App;
