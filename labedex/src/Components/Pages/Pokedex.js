import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/PokedexStyle"
import { useHistory } from "react-router-dom"

export default function Pokedex (){
    const history = useHistory()

    const goBackToPage = () => {
        history.goBack()
    }

    return <div>
        <Navigation>
            <Button onClick={goBackToPage}>Voltar para lista de pokemons</Button>
            <Title>Pokedex</Title>
        </Navigation>

        <Main>
            <Card>
                <Container className="pokeCard">
                    Poke Card
                </Container>

                <Container>
                    <ButtonCard>remover</ButtonCard>
                    <ButtonCard className="buttonCard">Ver detal.</ButtonCard>
                </Container>
            </Card>
        </Main>
    </div>
}