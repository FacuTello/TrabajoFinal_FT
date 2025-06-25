import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Joyeria from './Components/Joyeria';
import RopaMasculina from './Components/RopaMasculina';
import RopaFemenina from './Components/RopaFemenina';
import Electronica from './Components/Electronica';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Administracion from './Components/Administracion';
import Agregar from './Components/Agregar';
import RutaProtegida from './Components/RutaProtegida';
import Usuario from './Components/Usuario';


function App() {
  
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/Joyeria" element={<Joyeria/>}/>
            <Route path="/Masculina" element={<RopaMasculina/>}/>
            <Route path="/Femenina" element={<RopaFemenina/>}/>
            <Route path="/Electronica" element={<Electronica/>}/>
            <Route path="/login" element={<Administracion/>}/>
            <Route path="/Agregar" element={
              <RutaProtegida><Agregar/></RutaProtegida>
            }/>
            <Route path="/Usuario" element={
              <RutaProtegida><Usuario/></RutaProtegida>
            }/>
            
          </Routes>
        </div>
      </Router>


    </div>
  )
}

export default App
