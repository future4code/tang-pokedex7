import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Pokedex from "../Pages/Pokedex/Pokedex"
import Details from "../Pages/Details/Details"

export default function Router (){

    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/Pokedex">
                <Pokedex/>
            </Route>

            <Route exact path={'/Details/:Pokemon'}>
                <Details/>
            </Route>
        </Switch>
    </BrowserRouter>
}