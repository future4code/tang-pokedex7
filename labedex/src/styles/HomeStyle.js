import styled from "styled-components"

//Navigation bar starts
export const Navigation = styled.nav`
    display: grid;
    grid-template: 1fr / 15% 60%;
    align-items: center;
    background-color: yellow;
    
`
export const Button = styled.button`
    background-color: #ff0000;
    padding: 10px;
    margin-left: 25px;
    font-family: Tahoma;
    font-weight: bold;
    border-radius: 100px;
    border: none;
    &:hover {
        background-color: #7f0000;
    }
    &:focus {
        outline: none;
    }
`
export const Title = styled.h2`
    font-family: Tahoma;
    text-transform: uppercase;
`
//Navigation bar ends

//Main container starts
export const Main = styled.main`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 20px 100px;
    grid-gap: 20px;
    justify-content: center;
    background-color: blue;
`
export const Card = styled.article`
    border: 4px solid black;
`
export const Container = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    &.pokeCard {
        display: grid;
        grid-template: 1fr 1fr/ 1fr;
        background-color: red;
        height: 150px;
        justify-content: center;
    }
`

export const ButtonCard = styled.button`
    background-color: yellow;
    font-family: Tahoma;
    font-weight: bold;
    
    &:hover {
        background-color: #ffbf00;
    }
    &:focus {
        outline: none;
    }
    &.buttonCard {
        color: red;
        border-left: 1px solid black;
    }
`
//Main container ends