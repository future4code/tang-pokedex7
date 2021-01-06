export default function Home (){
    return<div>
        <nav>
            <button>Voltar</button>
            <h2>Nome do Pokemon</h2>
            <button>Adicionar/Remover da Pokedex</button>
        </nav>

        <main>
            <article>
                <div> Imagem frontal</div>
                <div> Imagem Posterior</div>
            </article>

            <article>
                <div> 
                    <h2>Status</h2>
                    <p>Hp</p>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Special-attack</p>
                    <p>Special-defense</p>
                    <p>Speed</p>
                </div>
            </article>

            <article>
                <div>
                    <p>type1</p>
                    <p>type2</p>
                </div>

                <div>
                    <h2>Moves</h2>
                    <p>Move name 1</p>
                    <p>Move name 2</p>
                    <p>Move name 3</p>
                </div>
            </article>
        </main>
    </div>
}