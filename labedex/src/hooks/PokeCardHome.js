import {Card, Container, ButtonCard} from "../styles/PokedexStyle"
import CathPokemonSprites from "../hooks/CatchPokemonSprites"
import { useHistory } from "react-router-dom"
import GlobalContext from "../Global/GlobalContext"
import { useContext } from "react"

export default function PokeCardHome (props) {
    const history = useHistory()
    const data = useContext(GlobalContext);

    const addDetails = (pokemon) => {
        data.setters.setDetails(pokemon)
        history.push("/Details")
    }

    return <Card >
        <Container className="pokeCard">
            {props.pokemon.name}
            <span><img src={CathPokemonSprites(props.url)} alt={props.pokemon.name}/></span>
        </Container>

        <Container>
            <ButtonCard onClick={() => props.addPokedex(props.pokemon)}>adicionar</ButtonCard>
            <ButtonCard onClick={() => addDetails(props.pokemon)} className="buttonCard">Ver detal.</ButtonCard>
        </Container>
    </Card>
}