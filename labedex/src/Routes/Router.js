import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../Components/Pages/Home"
import Pokedex from "../Components/Pages/Pokedex"
import Details from "../Components/Pages/Details"

export default function Router(props){

    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/">
                    <Home 
                        pokemons={props.pokemons}
                        pokedex={props.pokedex}
                        setPokedex={props.setPokedex}
                    />
                </Route>

                <Route exact path="/Pokedex">
                    <Pokedex
                        pokedex={props.pokedex}
                    />
                </Route>
            
                <Route exact path="/Details">
                    <Details/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}