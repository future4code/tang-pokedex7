import './App.css';
import {useState} from "react"
import Home from "./Components/Pages/Home"
import Pokedex from "./Components/Pages/Pokedex"
import Details from "./Components/Pages/Details"
import PokemonRequest from "./hooks/PokemonRequest"

function App() {
  const pokemons = PokemonRequest("https://pokeapi.co/api/v2/pokemon/?results=20")


  return (
    <div className="App">
      <Home pokemons={pokemons}/>
    </div>
  );
}

export default App;
