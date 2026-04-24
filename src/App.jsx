import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Exercicio2 from './pages/exercicio2'
import SignUp from './pages/SignUp'

function App() {
  
  return (
    <>
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      
      <Route path ="/" element={<Home/>}/>
      <Route path="/About" element={<Exercicio2/>}/>

      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
 
     </Routes>
      
    </>
  )
}

export default App
