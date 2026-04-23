import { Link} from "react-router-dom";
import'./style.css';

function Home () {
    return(
        <>
        <h1>Exercicios React :)</h1>
        
        <br/>
        <Link to ="/About">
        <button>Exercicio1</button>
        </Link>

        
        <Link to ="/Exercicio2">
        <button>Exercicio2</button>
        </Link>
        </>
    )
}

export default Home