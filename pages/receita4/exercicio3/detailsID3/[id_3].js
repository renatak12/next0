export default function MovieID_3({data}){
  return (
    <div id="content">
      Titulo: {data.Title} -/- Ano: {data.Year} -/- 
      <img src={data.Poster}></img>
    </div>  
  )    
}

export async function getServerSideProps(context){
  const res = await fetch(`/http://www.omdbapi.com/?apikey=86b9eaa3&s=2010`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
