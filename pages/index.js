import Link from 'next/link'

export default function Home(){
  return (
    <div>
    
        <style jsx>{`
                
                nav {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                
                a {
                    color: blue;
                    font-size: 20px;
                    padding: 5px;
                }
            `}

        </style>

        <nav>
        
                <Link id='receita1' href='/pages/receita1'><a>Receita 1</a></Link>
                <Link id='receita2' href='/pages/receita2'><a>Receita 2</a></Link>
                <Link id='receita3' href='/pages/receita3/bagdad'><a>Receita 3</a></Link>
        </nav>
        
    </div>
  )
}
