import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Joyeria from './Components/Joyeria';
import RopaMasculina from './Components/RopaMasculina';
import RopaFemenina from './Components/RopaFemenina';
import Electronica from './Components/Electronica';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  

  return (
    <div>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Joyeria/>}/>
            <Route path="/Masculina" element={<RopaMasculina/>}/>
            <Route path="/Femenina" element={<RopaFemenina/>}/>
            <Route path="/Electronica" element={<Electronica/>}/>
          </Routes>
        </div>

      </Router>


    </div>
  )
}

export default App
