import {Titulo} from "../Receita1/titulo.js"
import {Titulo2} from "../Receita1/titulo2.js"
import Link from 'next/link'

export default function Home(){
  return (
    <div>
    
        <style jsx>{`
                
                nav {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                
                a {
                    color: blue;
                    font-size: 20px;
                    padding: 5px;
                }
            `}

        </style>

        <nav>
        <Link href="/receita2/novaPagina"><a> Nova Pagina </a></Link>
        <Link href="/receita3/2017"><a> Filmes </a></Link>
        <Link href="/receita2/about"><a> Sobre nós </a></Link>
        <Link href="/receita4/exercicio1/2017"><a> Receita4_1 </a></Link>
        <Link href="/receita4/exercicio3/2010"><a> Receita4_3 </a></Link>
        <Link href="/receita5/exercicio1"><a> Receita5_1 </a></Link>
        <Link href="/receita5/exercicio2"><a> Receita5_2 </a></Link>
        </nav>
        <Titulo titulo="Tarefa de PWeb Receitas-Next"/>
        <h2>
          Viva Santana!
        </h2>
        <Titulo2 />
    </div>
  )
}
