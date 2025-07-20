import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Joyeria from './Components/Joyeria';
import RopaMasculina from './Components/RopaMasculina';
import RopaFemenina from './Components/RopaFemenina';
import Electronica from './Components/Electronica';
import Administracion from './Components/Administracion';
import Agregar from './Components/Agregar';
import Usuario from './Components/Usuario';
import ModalCarrito from './Components/ModalCarrito';
import RutaProtegida from './Components/RutaProtegida'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <Header abrirModal={() => setMostrarModal(true)} />
          <ModalCarrito
            mostrarModal={mostrarModal}
            cerrarModal={() => setMostrarModal(false)}
          />
          <Routes>
            <Route path="/Joyeria" element={<Joyeria />} />
            <Route path="/Masculina" element={<RopaMasculina />} />
            <Route path="/Femenina" element={<RopaFemenina />} />
            <Route path="/Electronica" element={<Electronica />} />
            <Route path="/login" element={<Administracion />} />
            <Route
              path="/Agregar"
              element={
                <RutaProtegida>
                  <Agregar />
                </RutaProtegida>
              }
            />
            <Route
              path="/Usuario"
              element={
                <RutaProtegida>
                  <Usuario />
                </RutaProtegida>
              }
            />
          </Routes>
          <Footer/>
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;

