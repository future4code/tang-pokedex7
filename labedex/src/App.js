import './App.css';
import Home from "./Components/Pages/Home"
import Pokedex from "./Components/Pages/Pokedex"
import Details from "./Components/Pages/Details"

function App() {
  return (
    <div className="App">
      <Home/>
      <Pokedex/>  
      <Details/>
    </div>
  );
}

export default App;
