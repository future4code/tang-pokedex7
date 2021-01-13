import {Navigation, Button, Title, Main} from "../../styles/PokedexStyle"
import { useHistory } from "react-router-dom"
import CatchPokemonData from "../../hooks/CatchPokemonData"
import PokeCard from "../PokeCard"

export default function Pokedex (props){
    const history = useHistory()

    const goBackToPage = () => {
        history.goBack()
    }

    const goToDetails = () => {
        
        history.push("/Details")
    }

    var poke = props.pokedex.filter((url, index) => props.pokedex.indexOf(url) === index)
    
    return <div>
        <Navigation>
            <Button onClick={goBackToPage}>Voltar para lista de pokemons</Button>
            <Title>Pokedex</Title>
        </Navigation>

        <Main>
            {poke.map(function(url, index){
                const newPokemon = CatchPokemonData(url)
                return <PokeCard key={index}
                    pokemon={newPokemon}
                    url={url}
                />
            })}
        </Main>
    </div>
}