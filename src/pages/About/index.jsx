import {Link} from 'react-router-dom'
import './style.css'

function About () {
    return (
<>
  <h1>SomAAR DOis numeros </h1>
  <br/>
   <input type="number" id="num1"
   placeholder='digiteonumero'></input>
   
   <input type="number" id="num2"
   placeholder='digiteonumero'></input>
   

   <button onclick="somar()">Somar</button>
   <br/>

   <p>Resultado: <span id="resultado"></span></p>

  
<Link to ="/"></Link>
</>
    )
}

export default About