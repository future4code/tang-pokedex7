import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/HomeStyle"
import { useEffect } from "react"
import PokemonRequest from "../../hooks/PokemonRequest"

export default function Home (props){

    return <div>
        <Navigation>
            <Button>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            {props.pokemons.map(pokemon => {
                return <Card key={pokemon.url}>
                <Container className="pokeCard">
                    {pokemon.name}   
                </Container>

                <Container>
                    <ButtonCard>Adicionar</ButtonCard>
                    <ButtonCard className="buttonCard">Ver detal.</ButtonCard>
                </Container>
            </Card>
            })}
        </Main>
    </div>
}