import {Navigation, Main, Title, Button, Container, Image, Status, Types} from "../../styles/DetailsStyle"
import { useHistory } from "react-router-dom"
import GlobalContext from "../../Global/GlobalContext"
import { useContext } from "react"

export default function Details  (props){
    const history = useHistory()
    const data = useContext(GlobalContext);

    const goBackToPage = () => {
        history.goBack()
    }

    return<div>
        <Navigation>
            <Button onClick={() => {goBackToPage()}}>Voltar</Button>
            <Title>{data.states.details.name}</Title>
            <Button className="right">Adicionar/Remover da Pokedex</Button>
        </Navigation>

        <Main>
            <Container className="images">
                <span><img src={data.states.details.sprites.front_default}/></span>
                <span><img src={data.states.details.sprites.back_default}/></span>
            </Container>

            <Container>
                <Status>
                    <h2>Status</h2>
                    <p>Hp {data.states.details.stats[0].base_stat}</p>
                    <p>Attack {data.states.details.stats[1].base_stat}</p>
                    <p>Defense {data.states.details.stats[2].base_stat}</p>
                    <p>Special-attack {data.states.details.stats[3].base_stat}</p>
                    <p>Special-defense {data.states.details.stats[4].base_stat}</p>
                    <p>Speed {data.states.details.stats[5].base_stat}</p>
                </Status>
            </Container>

            <Container className="rightSide">
                <Types>
                    <h2>Types</h2>
                    {data.states.details.types.map( type => {
                        return <p>{type.type.name}</p>
                    })}
                </Types>

                <div>
                    <h2>Moves</h2>
                    <p>{data.states.details.moves[0].move.name}</p>
                    <p>{data.states.details.moves[1].move.name}</p>
                    <p>{data.states.details.moves[2].move.name}</p>
                    <p>{data.states.details.moves[3].move.name}</p>
                    <p>{data.states.details.moves[4].move.name}</p>
                </div>
            </Container>
        </Main>
    </div>
}