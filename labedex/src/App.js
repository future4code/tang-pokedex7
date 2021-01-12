import './App.css';
import Router from "./Routes/Router"
import PokemonRequest from "./hooks/PokemonRequest"
import { useEffect, useState } from 'react';

function App() {
  let pokemonsApi = PokemonRequest("https://pokeapi.co/api/v2/pokemon/?results=20")
  const [pokedex, setPokedex] = useState([])
  
  useEffect(() =>{
    console.log(pokedex)
  }, [pokedex])
  return (
    <div className="App">
      <Router 
        pokemons={pokemonsApi}
        pokedex={pokedex}
        setPokedex={setPokedex}
      />
    </div>
  );
}

export default App;
