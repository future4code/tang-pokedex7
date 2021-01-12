import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/HomeStyle"
import CatchPokemonSprites from "../../hooks/CatchPokemonSprites"
import CatchPokemonData from "../../hooks/CatchPokemonData"
import { useHistory } from "react-router-dom"

export default function Home (props){
    const history = useHistory()

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const goToDetails = () => {
        
        history.push("/Details")
    }

    const addToPokedex = (url) => {
        const pokedex = url
        const newPokedex = [...props.pokedex, pokedex]
        props.setPokedex(newPokedex)
    }

    return <div>
        <Navigation>
            <Button onClick={goToPokedex}>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            {props.pokemons.map(pokemon => {
                const newPokemon = CatchPokemonSprites(pokemon.url)
                return <Card key={pokemon.url}>
                <Container className="pokeCard">
                    <p>{pokemon.name} </p>
                    <span><img alt={pokemon.name} src={newPokemon}/></span>  
                </Container>

                <Container>
                    <ButtonCard onClick={() => {addToPokedex(pokemon.url)}}>Adicionar</ButtonCard>
                    <ButtonCard className="buttonCard" onClick={goToDetails}>Ver detal.</ButtonCard>
                </Container>
            </Card>
            })}
        </Main>
    </div>
}