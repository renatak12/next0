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
        <Link href="/receita3/2017"><a> Receita3 </a></Link>
        <Link href="/receita2/about"><a> Sobre nós </a></Link>
        <Link href="/receita4/exercicio1/2012"><a> Receita4_1 </a></Link>
        <Link href="/receita4/exercicio3/2010"><a> Receita4_3 </a></Link>
        <Link href="/receita5/exercicio1/movies"><a> Receita5_1 </a></Link>
        <Link href="/receita5/exercicio2/movies"><a> Receita5_2 </a></Link>
        <Link href="/receita5/exercicio3/movies"><a> Receita5_3 </a></Link>
        <Link href="/receita5/exercicio5/movies"><a> Receita5_5 </a></Link>
        <Link href="/receita6/exercicio1/movies33"><a> Receita6_1 </a></Link>
        <Link href="/receita6/exercicio2/movies33"><a> Receita6_2 </a></Link>
        <Link href="/receita6/exercicio3/movies33"><a> Receita6_3 </a></Link>
        <Link href="/receita9/exercicios1e2/id1"><a> Receita9_1e2 </a></Link>
        </nav>
        <Titulo titulo="Tarefa de PWeb Receitas-Next"/>
        <h2>
          Viva Santana!
        </h2>
        <Titulo2 />
    </div>
  )
}
