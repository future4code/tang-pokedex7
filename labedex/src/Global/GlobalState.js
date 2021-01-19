import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState({})
    const [morePokemons, setMorePokemons] = useState("20")
    
    useEffect(() => {
        getPokemons()
    }, [morePokemons])

    const getPokemons = () => {
    
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${morePokemons}&offset=0`)
        .then((response) => setPokemons(response.data.results))
        .catch((error) => alert(error.message))
    }

    const addToPokedex = (pokemon) => {
        const index = pokedex.findIndex((i) => i.id === pokemon.id)
        if(index === -1) {
            setPokedex(pokedex => [...pokedex, pokemon])
            alert(`${pokemon.name.toUpperCase()} Capturado com sucesso !!!`)
        }
        else{
            alert(`${pokemon.name.toUpperCase()} Já está na Pokedex !`)
        }
    }

    const removePokedex = (pokemon) => {
        setPokedex(pokedex.filter(array => {return array.name !== pokemon.name}))
    }
  
    const states = {pokemons, pokedex, details, morePokemons}
    const setters = {setPokemons, setPokedex, setDetails, setMorePokemons}
    const requests = {getPokemons, addToPokedex, removePokedex}
  
    const data = {states, setters, requests}
  
    return <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
}
  
export default GlobalState;