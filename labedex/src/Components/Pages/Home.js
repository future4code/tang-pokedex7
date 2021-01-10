import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/HomeStyle"
import CatchPokemonSprites from "../../hooks/CatchPokemonSprites"
import { useHistory } from "react-router-dom"

export default function Home (props){
    const history = useHistory()

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const goToDetails = (url) => {
        
        history.push("/Details")
    }

    return <div>
        <Navigation>
            <Button onClick={goToPokedex}>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            {props.pokemons.map(pokemon => {

                return <Card key={pokemon.url}>
                <Container className="pokeCard">
                    <p>{pokemon.name} </p>
                    <span><img src={CatchPokemonSprites(pokemon.url)}/></span>  
                </Container>

                <Container>
                    <ButtonCard>Adicionar</ButtonCard>
                    <ButtonCard className="buttonCard" onClick={()=>{goToDetails(pokemon.url)}}>Ver detal.</ButtonCard>
                </Container>
            </Card>
            })}
        </Main>
    </div>
}