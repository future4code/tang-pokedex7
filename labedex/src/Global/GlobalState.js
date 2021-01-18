import React, {useState, useEffect } from "react"
import axios from "axios"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState({})

    useEffect(() => {
        getpokemons()
    }, [])

    const getpokemons = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?results=${20}`)
            .then((response) => {
                setPokemons(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const states = { pokemons, pokedex, details };
    const setters = { setPokemons, setPokedex, setDetails };
    const requests =  {getpokemons} 
    const data = { states, setters, requests };

    return(
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState