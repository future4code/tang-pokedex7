import {Navigation, Button, Title, Main, Card} from "../../styles/HomeStyle"

export default function Home (){
    return <div>
        <Navigation>
            <Button>Ver minha POKEDEX</Button>
            <Title>Lista de Pokemons</Title>
        </Navigation>

        <Main>
            <Card>
                <div>
                    Poke Card
                </div>

                <div>
                    <button>adicionar</button>
                    <button>Ver detal.</button>
                </div>
            </Card>
        </Main>
    </div>
}