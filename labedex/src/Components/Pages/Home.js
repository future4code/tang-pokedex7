import {Navegação, Button, Tittle} from "../../styles/HomeStyle"

export default function Home (){
    return <div>
        <Navegação>
            <Button>Ver minha POKEDEX</Button>
            <Tittle>Lista de Pokemons</Tittle>
        </Navegação>

        <main>
            <article>
                <div>
                    Poke Card
                </div>

                <div>
                    <button>adicionar</button>
                    <button>Ver detal.</button>
                </div>
            </article>
        </main>
    </div>
}