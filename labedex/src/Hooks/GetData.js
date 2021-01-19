import axios from "axios"
import { useEffect, useState } from "react"

const GetData = (url) =>{
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios
        .get(url)
        .then(response => setPokemon(response.data))
        .catch((error) => alert(error.message))
    }, [url])

    return pokemon
}

export default GetData