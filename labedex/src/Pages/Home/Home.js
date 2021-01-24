import { useContext} from "react";
import Header from '../../Components/Header/Header'
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCard from "../../Components/PokeCard/PokeCard"
import {Div, MainDiv} from './Styled'

export default function Home () {
    const data = useContext(GlobalStateContext);
    const pokemons = data.states.pokemons

    return(
        <div>
        <Header pokelist = {false}/>
        <MainDiv>
            <Div>
                {pokemons && pokemons.map(pokemon =>{
                    
                    return <PokeCard key={pokemon.url}
                        name={pokemon.name}
                        id={pokemon.id}
                        url={pokemon.url}
                        image={pokemon.image_front} 
                    />
                })}
            </Div> 
        </MainDiv>
        </div>
    )
}