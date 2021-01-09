import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/HomeStyle"
import { useEffect, useState } from "react"
import PokemonRequest from "../../hooks/PokemonRequest"
import axios from "axios"

export default function Home (props){
    const [pokemons, setPokemons] = useState([])

    const catchPokemon = (url) => {
        axios
        .get(url)
        .then(Response => (console.log(Response.data)))
        .catch(erro => (console.log(erro)))
    }

    return <div>
        <Navigation>
            <Button>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            {props.pokemons.map(pokemon => {

                catchPokemon(pokemon.url)
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