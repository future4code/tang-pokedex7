import {Card, Container, ButtonCard} from "../styles/PokedexStyle"
import CatchPokemonSprites from "../hooks/CatchPokemonSprites"

export default function PokeCard (props) {
    console.log(props)
    return <Card>
        <Container className="pokeCard">
            {props.pokemon.name}
            <span><img alt={props.pokemon.name} src={CatchPokemonSprites(props.url)}/></span>
        </Container>

        <Container>
            <ButtonCard>remover</ButtonCard>
            <ButtonCard className="buttonCard">Ver detal.</ButtonCard>
        </Container>
    </Card>
}