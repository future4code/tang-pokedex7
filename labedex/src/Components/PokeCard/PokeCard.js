import React, { useContext } from 'react'
import {Image, Div, Name, TitleContainer, ButtonContainer, ButtonPrimary} from './Styled'
import { useHistory} from 'react-router-dom'
import GetData from '../../Hooks/GetData'
import GetSprites from '../../Hooks/GetSprites'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function CardPokemon(props) {
  const history = useHistory()
  const pokemon = GetData(props.url)
  const data = useContext(GlobalStateContext);


  return (
    <Div >
      <TitleContainer>
        <Name>{pokemon.name}</Name>
        <Name>#0{pokemon.id}</Name>
      </TitleContainer>
        <Image  src={GetSprites(props.url)} alt={pokemon.name}/>
        <ButtonContainer>
          
        <ButtonPrimary onClick={() => {data.requests.addToPokedex(pokemon)}} >
            Add to Pokedex!
         </ButtonPrimary>

         <ButtonPrimary onClick={()=> {
          data.setters.setDetails(pokemon)
          history.push(`/Details/${pokemon.name}`)
          }}>
            Detalhes
         </ButtonPrimary>
          
        </ButtonContainer>
    </Div>
  );
}