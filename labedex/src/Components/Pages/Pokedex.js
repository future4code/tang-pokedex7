import {Navigation, Button, Title, Main} from "../../styles/PokedexStyle"
import { useHistory } from "react-router-dom"
import PokeCard from "../../hooks/PokeCardPokedex"
import GlobalContext from "../../Global/GlobalContext"
import { useContext } from "react"

export default function Pokedex (props){
    const history = useHistory()
    const data = useContext(GlobalContext);

    const  removePokemon = (pokemon) => {
        const newPokedex = data.states.pokedex.filter(data => {return data.name !== pokemon.name})
        data.setters.setPokedex(newPokedex)   
    }
    
    const goBackToPage = () => {
        history.goBack()
    }

    return <div>
        <Navigation>
            <Button onClick={goBackToPage}>Voltar para lista de pokemons</Button>
            <Title>Pokedex</Title>
        </Navigation>

        <Main>
            {data.states.pokedex && data.states.pokedex.map( pokemon =>{
                
                return <PokeCard key={pokemon.name}
                    pokedex={pokemon}
                    removePokemon={removePokemon}
                />
            })}
        </Main>
    </div>
}