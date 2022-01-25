import Link from "next/link";

export default function About(){
    return (
        <div>
          <h1> About </h1>
            <div> 
                <p> 
                    Olá, meu nome é Renata Araújo, sou estudante de Sistemas de Informação na UFRN.
                </p>

            </div>
            <Link href='/'><a>Voltar</a></Link>
            
        </div>
    )
}
