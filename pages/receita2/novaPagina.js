import Link from "next/link"

export default function Principal(){

   return (
      <div>
         <h1>Nova Página</h1>
         <MariaPrea texto="Texto qualquer"/>
         <Link href="/">
            <a>Voltar</a>
         </Link>
      </div>
   )
}

export const MariaPrea = ({texto}) => {
  return <h2>{texto}</h2>
}
