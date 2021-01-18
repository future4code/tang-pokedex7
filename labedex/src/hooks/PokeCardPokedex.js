import {Card, Container, ButtonCard} from "../styles/PokedexStyle"
import { useHistory } from "react-router-dom"
import GlobalContext from "../Global/GlobalContext"
import { useContext } from "react"

export default function PokeCardPokedex (props) {
    const history = useHistory()
    const data = useContext(GlobalContext);

    const addDetails = (pokemon) => {
        data.setters.setDetails(pokemon)
        history.push("/Details")
    }

    return <Card >
        <Container className="pokeCard">
            {props.pokedex.name}
            <span><img src={props.pokedex.sprites.front_default} alt={props.pokedex.name}/></span>
        </Container>

        <Container>
            <ButtonCard onClick={() => {props.removePokemon(props.pokedex)}} >remover</ButtonCard>
            <ButtonCard onClick={() => addDetails(props.pokedex)} className="buttonCard">Ver detal.</ButtonCard>
        </Container>
    </Card>
}