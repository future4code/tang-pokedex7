import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/PokedexStyle"

export default function Pokedex (){
    return <div>
        <Navigation>
            <Button>Voltar para lista de pokemons</Button>
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