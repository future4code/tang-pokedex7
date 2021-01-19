import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from '../../Components/Header/Header'
import { MainDiv, Div, ImageContainer, Image, StatusContainer, TypeContainer, AbilityText } from './Styled'
import axios from "axios";
export default function Details() {
    const data = useContext(GlobalStateContext);
    const details = data.states.details
    const [abilities, setAbilities] = useState([])
    console.log(abilities)
    
    const getAbilities = (url) => {
        axios
        .get(url)
        .then(response =>setAbilities([...abilities, response.data]))
        .catch(erro => erro)
    }

    useEffect(() => {
        getAbilities(details.abilities[0].ability.url)
        getAbilities(details.abilities[1].ability.url)
    }, [])

    return <div>
        <Header pokelist={true} />
        <MainDiv>
            <ImageContainer>
                <h1>{details.name}</h1>
                <Image src={details.sprites.other.['official-artwork'].front_default}/>
                <TypeContainer>
                    {details.types.map(array => {
                        return <h2>
                            {array.type.name}
                        </h2>
                    })}
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
               {abilities && abilities.map(array => {
                   return <AbilityText>
                       <p>{array.name}</p>
                       <p>{array.effect_entries[1].effect}</p>
                   </AbilityText>
               })}
            </StatusContainer>
        </MainDiv>
    </div>
}