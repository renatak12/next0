import {useRouter} from 'next/router'

export default function TheMovie({data}){

    const router = useRouter()

    if (router.isFallback) {
      return <div>Carregando...</div>
    }


    const title = data.data.title
    const episodes = data.data.episodes
    const score = data.data.score
    const image = data.data.images.jpg.image_url
    
    return (

        <div className="principal">
            <style jsx>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                .principal{
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    padding: 10px;
                    align-items: center;
                    font-family: 'Lato', sans-serif;
                    max-width: 500px;
                    border: 1px solid #000;
                    border-radius: 6px;
                }
                ul {
                    list-style: none;
                }
                ul li {
                    margin-bottom: 5px;
                }
            `}
            </style>

            <ul>
                <li> Título: {title}</li>
                <li> Episódios: {episodes} episódio(s)</li>
                <li> Score: {score}</li>
            </ul>

            <div>
                <img src={image} />
            </div>


        </div>     

    )

}

export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "tt4154664"}},

            {params: {id: "tt3067038"}},

            {params: {id: "tt0458339"}},

        ],

        fallback: true 

    }

}

export async function getStaticProps({ params }) {

    console.log(params)
    const res = await fetch(`https://www.omdbapi.com/?apikey=86b9eaa3&s=${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}
