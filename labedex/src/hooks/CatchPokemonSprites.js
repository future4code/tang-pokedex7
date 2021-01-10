import axios from "axios"
import { useState } from "react"

export default function CatchPokemonSprites (url) {
    const [pokemon, setPokemon] = useState({})
    axios
    .get(url)
    .then(Response => ( setPokemon(Response.data.sprites.front_default)))
    .catch(erro => (console.log(erro)))

    return pokemon
}