import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from '../../Components/Header/Header'
import { MainDiv, Div, ImageContainer, Image, StatusContainer } from './Styled'
export default function Details() {
    
    const data = useContext(GlobalStateContext);
    const details = data.states.details
    console.log(details)
    
    return <div>
        <Header pokelist={true} />
        <MainDiv>
            <ImageContainer>
                <h1>{details.name}</h1>
                <Image src={details.sprites.other.['official-artwork'].front_default}/>
                    
                <div>
                    {details.stats.map(status => {
                        return <div key={status.stat.name}>
                            <label htmlFor='status'> {status.stat.name}: {status.stat.value} </label> <br/>
                            <progress value={status.stat.value} max="250"> {status.stat.value} </progress>
                        </div>
                    })}
                </div>
            </ImageContainer>   

            <StatusContainer>
               <h1> Habilidades </h1>
               <p> {details.abilities[0].ability.name} </p>
               <p> {details.abilities[1].ability.name} </p>
            </StatusContainer>

            <StatusContainer>
                <Div>
                   1
                </Div>

                <Div>
                    2
                </Div>
            </StatusContainer>
        </MainDiv>
    </div>
}