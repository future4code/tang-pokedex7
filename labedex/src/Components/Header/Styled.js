import styled from "styled-components"
import {Colors} from '../../Constants/Const'

export const TopMenu = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.red.light};
  @media screen and (max-width: 700px){
    flex-flow: row wrap;
    width: 100%;
    height: 100px;
    padding-right: 10px;
  }
`

export const Title = styled.h1`
  @font-face {font-family: "Pokemon"; 
    src: url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.eot"); 
    src: url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.eot?#iefix") 
    format("embedded-opentype"), 
    url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.woff2") format("woff2"), 
    url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.woff") format("woff"), 
    url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.ttf") format("truetype"), 
    url("//db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.svg#Pokemon") format("svg"); 
  }
  font-family: Pokemon;
  text-transform: uppercase;
  font-size: 40px;
  color: white;
  @media screen and (max-width: 700px){
    font-size: 20px;  
    padding-left: 70px;
  }
  
  @media screen and (max-width: 375px){
    padding-left: 40px;
  }

  @media screen and (max-width: 320px){
    padding-left: 10px;
  }

`

export const Logo = styled.img`
  width: 120px;
  height: 120px; 
  margin-right: 15px;
  @media screen and (max-width: 700px){
    width: 80px;
    height: 80px; 
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PokedexButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 20px;  
  background-color: ${Colors.black.dark};
  color: ${Colors.black.text};
  box-shadow: 5px 5px 0px ${Colors.red.dark};
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 700px){
    padding: 5px;
  }
`