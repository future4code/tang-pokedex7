import {Colors} from '../../Constants/Const'
import styled from 'styled-components'

export const Image= styled.img`
    height: 150px;
    width: 150px; 
    z-index : 3;
    cursor: pointer;
    @media screen and (max-width: 700px){
        height: 80px;
        width: 80px; 
  }
`
export const Div = styled.div`
    height: 250px;
    width: 250px;
    background-color: ${Colors.black.primary};
    box-shadow: 5px 5px 0px ${Colors.black.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    opacity: 80%;
    overflow: hidden;
    position: relative;
    border-radius:5px ;
    &:hover{
        opacity: 100%;
    }
    @media screen and (max-width: 700px){
        height: 150px;
        width: 150px; 
  }
`
export const Name = styled.h4`
    color: white;
    text-align: center;
    text-transform: capitalize;
`
export const TitleContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 95%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 20px;
    background-color: ${Colors.red.dark};
    box-shadow: 0px 5px 5px rgba(255,255,255,0.2);
    @media screen and (max-width: 700px){
        height: 25px;
         
  }
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 3px;
    left: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
`

export const ButtonPrimary = styled.button`
    border: none;
    outline: none;
    border-radius: 10px;
    height: 30px;
    width: 80px;
    margin: 5px;
    background-color: ${Colors.red.dark};
    color: whitesmoke;
    font-size: small;
    z-index: 4;
`