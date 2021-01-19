import axios from "axios"
import { useEffect, useState } from "react"

const GetSprites = (url) =>{
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios
        .get(url)
        .then(response => setPokemon(response.data.sprites.other.['official-artwork'].front_default))
        .catch((error) => alert(error.message))
    }, [url])

    return pokemon
}

export default GetSprites