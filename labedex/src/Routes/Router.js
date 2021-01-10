import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useHistory } from "react-router-dom"
import Home from "../Components/Pages/Home"
import Pokedex from "../Components/Pages/Pokedex"
import Details from "../Components/Pages/Details"
import PokemonRequest from "../hooks/PokemonRequest"

export default function Router(){
    const pokemons = PokemonRequest("https://pokeapi.co/api/v2/pokemon/?results=20")
    const history = useHistory()

    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/">
                    <Home pokemons={pokemons}/>
                </Route>

                <Route exact path="/Pokedex">
                    <Pokedex/>
                </Route>
            
                <Route exact path="/Details">
                    <Details/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}