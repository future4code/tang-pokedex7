import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from '../../Components/Header/Header'
import { MainDiv, Div, ImageContainer, Image, StatusContainer, TypeContainer } from './Styled'
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
                <TypeContainer>
                    <h2>{details.types[0].type.name}</h2> 
                    <h2>{details.types[1].type.name}</h2>
                </TypeContainer>   
                <div>
                    {details.stats.map(status => {
                        return <div key={status.stat.name}>
                            <label htmlFor='status'> {status.stat.name}: {status.base_stat} </label> 
                            <progress value={status.base_stat} max="250"> {status.base_stat} </progress>
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