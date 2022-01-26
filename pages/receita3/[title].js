import Link from 'next/link'

export default function Movies({data}){
  return (
    <div>
      <style jsx>{`
        a{
          color: blue;
          text-decoration: none;
          display: flex;
          justify-content: center;
          padding-top: 1%;
        }
        img {
          width: 150px;
        }
        h1{
          display: flex;
          justify-content: center;
        }
        label {
          margin-left: 40%;
        }
        #content {
          display: flex;
          justify-content: center;
        }
        #cabecalho {
          padding-top: 0%;
          padding-bottom: 1%;
        }
      `}
      </style>
      <h1>Movies</h1>

      <div id="map">
        {data.Search.map( (m) => 
          <div id="content">
            Titulo: {m.Title} -/- Ano: {m.Year} -/- 
            <img src={m.Poster}></img>
          </div>  
        )}               
      </div>

      <Link href="/">
      <a>Voltar</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps(context){
  
  const res = await fetch(`http://http://www.omdbapi.com/?apikey=86b9eaa3&s=${context.params.title}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
