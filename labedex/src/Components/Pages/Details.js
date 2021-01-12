import {Navigation, Main, Title, Button, Container, Image, Status, Types} from "../../styles/DetailsStyle"
import { useHistory } from "react-router-dom"

export default function Details  (){
    const history = useHistory()

    const goBackToPage = () => {
        history.goBack()
    }

    return<div>
        <Navigation>
            <Button onClick={goBackToPage}>Voltar</Button>
            <Title>Nome do Pokemon</Title>
            <Button className="right">Adicionar/Remover da Pokedex</Button>
        </Navigation>

        <Main>
            <Container className="images">
                <Image> Imagem frontal</Image>
                <Image> Imagem Posterior</Image>
            </Container>

            <Container>
                <Status>
                    <h2>Status</h2>
                    <p>Hp</p>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Special-attack</p>
                    <p>Special-defense</p>
                    <p>Speed</p>
                </Status>
            </Container>

            <Container className="rightSide">
                <Types>
                    <p>type1</p>
                    <p>type2</p>
                </Types>

                <div>
                    <h2>Moves</h2>
                    <p>Move name 1</p>
                    <p>Move name 2</p>
                    <p>Move name 3</p>
                </div>
            </Container>
        </Main>
    </div>
}