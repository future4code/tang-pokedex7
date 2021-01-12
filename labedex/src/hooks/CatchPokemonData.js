import axios from "axios"
import { useEffect, useState } from "react"

export default function CatchPokemonData (url) {
    const [pokemon, setPokemon] = useState({})
    
    useEffect(()=>{
        axios
        .get(url)
        .then(Response => ( setPokemon(Response.data)))
        .catch(erro => (console.log(erro)))
    },[url])

    return pokemon
}