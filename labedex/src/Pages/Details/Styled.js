import styled from 'styled-components'
import {Colors} from '../../Constants/Const'

export const MainDiv = styled.div`
    min-height: 90vh;
    position: fixed;
    width: 100%;
    background-color: ${Colors.blue.dark};
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-gap: 50px;
`
export const Div = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
    height: 100px;
    @media screen and (max-width: 700px){
        margin-top: 20px;
  }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 500px;
    background-color: ${Colors.red.primary};
    border: 5px solid ${Colors.red.dark};
    margin: 25px 0;
    border-radius: 10px;
`   

export const Image = styled.img`
    width: auto;
    height: 40%;
    background-color: #708090;
    border: 4px solid ${Colors.black.primary};
    border-radius: 25px;
    @media screen and (max-width: 700px){
        width: 200px;
        height: 200px;
        margin-top: 30px;
        z-index: 4;
    }
`

export const StatusContainer = styled(ImageContainer)`
    align-items: flex-start;
    align-items: center;
`
export const TypeContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5px;
    box-shadow: 0px 8px 10px rgba(0,0,0,0.2);
`

export const AbilityText = styled.div`
    padding: 20px;

`
