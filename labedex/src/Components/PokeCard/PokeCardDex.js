import React, { useContext } from 'react'
import {Image, Div, Name, TitleContainer, ButtonContainer, ButtonPrimary} from './Styled'
import { useHistory} from 'react-router-dom'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function CardPokemon(props) {
  const history = useHistory()
  const data = useContext(GlobalStateContext);


  return (
    <Div >
      <TitleContainer>
        <Name>{props.pokemon.name}</Name>
        <Name>#0{props.pokemon.id}</Name>
      </TitleContainer>
        <Image  src={props.pokemon.sprites.other.['official-artwork'].front_default} alt={props.pokemon.name}/>
        <ButtonContainer>
          
        <ButtonPrimary onClick={() => {data.requests.removePokedex(props.pokemon)}} >
            Remover
         </ButtonPrimary>

         <ButtonPrimary onClick={()=> history.push(`/Details/${props.pokemon.name}`)}>
            Detalhes
         </ButtonPrimary>
          
        </ButtonContainer>
    </Div>
  );
}