import {Titulo} from "../components/Titulo.js"
import {Titulo2} from "../components/Titulo2.js"
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
                
                a:hover {
                    color: #0489B1;
                }
            `}

        </style>

        <nav>
        <Link href="/receita2/novaPagina">
          <a> Nova Pagina </a>
        </Link>
        <Link href="/receita2/about">
          <a> Sobre nós </a>
        </Link>
        <Titulo titulo="Tarefa de PWeb Receita-Next-02"/>
        <h2>
          Viva Santana!
        </h2>
        <Titulo2 />
        </nav>
    </div>
  )
}

