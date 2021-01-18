import { useState, useEffect } from "react"
import axios from "axios"

export default function PokemonRequest (url) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then(Response => (setPokemons(Response.data)))
        .catch(erro => (console.log(erro)))
    },[url])

    return pokemons
}