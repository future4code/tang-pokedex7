import {Navigation, Button, Title, Main, Card, Container, ButtonCard} from "../../styles/HomeStyle"

export default function Home (){
    return <div>
        <Navigation>
            <Button>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            <Card>
                <Container className="pokeCard">
                    Poke Card
                </Container>

                <Container>
                    <ButtonCard>Adicionar</ButtonCard>
                    <ButtonCard className="buttonCard">Ver detal.</ButtonCard>
                </Container>
            </Card>
            
        </Main>
    </div>
}