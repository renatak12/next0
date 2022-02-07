import Link from 'next/link'

export default function Movies2({data}){  
    return (
        <ul>
            {data.Search.map( (m, i) => 
               <li key={i}>
                  <Link href={`//receita4/exercicio3/detailsID3/${m.imdbID}`}><a>{m.Title}</a></Link>
               </li>
            )}
        </ul>
    )    
}

export async function getServerSideProps(context){
  const res = await fetch(`https://www.omdbapi.com/?apikey=86b9eaa3&s=2017`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
