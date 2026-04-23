import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Exercicio2 from './pages/exercicio2'

function App() {
  
  return (
    <>
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      
      <Route path ="/" element={<Home/>}/>
      <Route path="/About" element={<Exercicio2/>}/>

      </Routes>
      
    </>
  )
}

export default App
