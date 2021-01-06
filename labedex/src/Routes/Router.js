import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Components/Pages/Home'
import Pokedex from "../Components/Pages/Pokedex"
import Details from "../Components/Pages/Details"

export default function Router(){
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/">
                    <Home/>
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