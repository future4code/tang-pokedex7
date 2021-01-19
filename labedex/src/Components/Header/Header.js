import React from 'react'
import {useHistory} from 'react-router-dom'
import {TopMenu, Title, Logo, LogoContainer, PokedexButton} from './Styled'
import PokeLogo from '../../Img/PokeLogo.png'


export default function Header(props) {
    const history = useHistory()
    return(
        <TopMenu>
          <LogoContainer>
            <Logo src={PokeLogo} alt="Pokemon Logo"/>
            <Title>LABEDEX</Title>
          </LogoContainer>
          <LogoContainer>
            {props.pokelist ? <PokedexButton  onClick={()=> history.push('/')}>Back</PokedexButton> : <PokedexButton  onClick={()=> history.push('/pokedex')}>My Pokedex</PokedexButton>}
          </LogoContainer>
        </TopMenu>
    )
}