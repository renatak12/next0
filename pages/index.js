import {Titulo} from "../components/main.js"
import {Principal} from "../components/main.js"
import Link from 'next/link'

export default function Home(){
  return (
    <div>
        <Link href="/receita2/novaPagina">
          <a> Nova Pagina </a>
        </Link>
        <Link href="/receita2/about">
          <a> Sobre nós </a>
        </Link>
      </nav>
      <Titulo titulo="Tarefa de PWeb Receita-Next-01"/>
      <h2>
        Viva Santana!
      </h2>
      <Principal />
    </div>
  )
}
