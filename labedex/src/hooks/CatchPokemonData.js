import axios from "axios"
import { useState } from "react"

export default function CatchPokemonData (url) {
    const [pokemon, setPokemon] = useState({})
    axios
    .get(url)
    .then(Response => ( setPokemon(Response.data)))
    .catch(erro => (console.log(erro)))

    return pokemon
}