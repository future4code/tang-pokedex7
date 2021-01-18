import './App.css';
import Router from "./Routes/Router"
import PokemonRequest from "./hooks/PokemonRequest"
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalState from "./Global/GlobalState"

function App() {

  return (
    <div className="App">
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
