import styled from 'styled-components'
import {Colors} from '../../Constants/Const'

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px){
        margin-top: 20px;
  }
`

export const MainDiv = styled.div`
    width: 100%;
    min-height: 90vh;
    max-height: max-content;
    background-color: ${Colors.blue.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
