import {Navigation, Button, Title, Main} from "../../styles/HomeStyle"
import { useHistory } from "react-router-dom"
import PokeCard from "../../hooks/PokeCardHome"
import PokemonRequest from "../../hooks/PokemonRequest"
import { useContext, useEffect } from "react"
import GlobalContext from "../../Global/GlobalContext"

export default function Home (){
    const history = useHistory()
    const data = useContext(GlobalContext);
    const pokemon = data.states.pokemons

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const addPokedex = (newPokemon) => {
        let newPokedex = [...data.states.pokedex, newPokemon];
        data.setters.setPokedex(newPokedex)
        alert(`${newPokemon.name} agora está na sua pokedex!`);
    };

    return <div>
        
        <Navigation>
            <Button onClick={() => {goToPokedex()}}>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            { pokemon.map(pokemonData => {
                const pokemon = PokemonRequest(pokemonData.url)

                return <PokeCard key={pokemonData.url}
                    pokemon={pokemon}
                    url={pokemonData.url}
                    addPokedex={addPokedex}
                />
            })}
        </Main>
    </div>
}