import { useContext} from "react";
import Header from '../../Components/Header/Header'
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCardDex from "../../Components/PokeCard/PokeCardDex"
import {Div, MainDiv} from './Styled'

export default function Pokedex () {
    const data = useContext(GlobalStateContext);
    const pokemons = data.states.pokedex

    return (
        <div>  
            <Header pokelist = {true}/>
            <MainDiv>
                <Div>
                {pokemons && pokemons.map(pokemon =>{

                    return <div>
                        <PokeCardDex key={pokemon.id}
                            pokemon={pokemon}
                        />
                    </div>
                })}
                </Div> 
            </MainDiv>
        </div>
    )
}