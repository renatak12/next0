export default function TheMovie({data}){

    if(data === undefined) return <div>Carregando...</div>
    
    return (

        <div>

            <div>{data.Title} --- {data.Year}</div>

            <div>{data.Plot}</div>

            <div>

                <img src={data.Poster} width="300" height="400"/>

            </div>

        </div>     

    )

}

export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "tt0458339"}},

            {params: {id: "tt0090190"}},

            {params: {id: "tt0098503"}},

            {params: {id: "tt0212879"}},

            {params: {id: "tt0098502"}},

            {params: {id: "tt0473445"}},

            {params: {id: "tt0059045"}},

            {params: {id: "tt1243972"}},

            {params: {id: "tt0056174"}}

        ],

        fallback: true 

    }

}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=86b9eaa3&s=${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}
