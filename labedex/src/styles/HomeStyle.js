import styled from "styled-components"

//Navigation bar starts
export const Navigation = styled.nav`
    display: grid;
    grid-template: 1fr / 15% 75%;
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
    grid-template-columns: auto auto auto auto;
    padding: 20px 100px;
    grid-gap: 10px;
`
export const Card = styled.article`
    border: 2px solid red;
    border-radius: 12px;
`
//Main container ends