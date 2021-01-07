import styled from "styled-components"

export const Navigation = styled.nav`
    display: grid;
    grid-template: 1fr / 15% 60% 15%;
    align-items: center;
    justify-content: space-between;
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
    &.right{
        margin-left: 0px;
        margin-right: 25px;
    }
`
export const Title = styled.h2`
    font-family: Tahoma;
    text-transform: uppercase;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const Container = styled.article`
    margin-top: 20px;
    &.images{
        display: grid;
        grid-template-row: 1fr 1fr;
    }
    &.rightSide{
        display: grid;
        grid-template-row: 20% 80%;
    }
`
export const Image = styled.div`
    background-color: #FDE7D6;
    margin: 20px 50px 0px 50px; 
`
export const Status = styled.div`
    background-color: #FDE7D6;
`
export const Types = styled.div`
    margin: 20px 30px;
    dislpay: inline;
    background-color: #FDE7D6;
`