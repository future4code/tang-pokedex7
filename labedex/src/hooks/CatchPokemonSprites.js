import axios from "axios"
import { useEffect, useState } from "react"

export default function CatchPokemonSprites (url) {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios
        .get(url)
        .then(Response => ( setPokemon(Response.data.sprites.front_default)))
        .catch(erro => (console.log(erro)))
    },[url])

    return pokemon
}