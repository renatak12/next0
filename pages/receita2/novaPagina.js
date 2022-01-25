import Link from "next/link"

export default function Principal(){

   return (
      <div>
         <h1>Nova Página</h1>
         <MariaPrea texto="Morreu Maria Preá"/>
         <Link href="/">
            <a>Voltar</a>
         </Link>
      </div>
   )
}

export const MariaPrea = ({texto}) => {
   
  return <h2>{texto}</h2>
}
