import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Movies(){
    const router = useRouter()
    const movie = router.query.movies
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=86b9eaa3&s=2017`, fetcher)    

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <ul>
            { data.Search.map( (m, i) => 
               <li key={i}>
                  <Link href={`//receita4/exercicio1/detailsID/${m.imdbID}`}><a>{m.Title}</a></Link>
               </li>
            )}
        </ul>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
