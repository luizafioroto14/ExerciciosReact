
import {Link} from 'react-router-dom'
import './style.css'
import { useState } from 'react'


function SignUp () {
     const [ nome, setNome ] = useState ("")
     const [ email, setEmail ] = useState ("")
     const [ senha, setSenha ] = useState ("")
     const [ resultado, setResultado ] = useState ()

     function handleSubmit(event) {
     event.preventDefault();
     console.log(nome, email, senha)
     setResultado(1+1);
     }

    return (
        <>
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
            <label>Nome</label>
             <input 
                type="text"
                value={nome}
                onChange={ (event) => setNome(event.target.value) }
            />
             <label>Email</label>
             <input 
                type="email"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
             <label>Senha</label>
             <input 
                type="password"
                value={senha}
                onChange={ (e) => setSenha(e.target.value)}


            />

            <p>{resultado}</p>
            <button type="submit">Cadastrar</button>
            
            
        </form>
        <Link to ="/"></Link>
        </>
       
    )
}

export default SignUp