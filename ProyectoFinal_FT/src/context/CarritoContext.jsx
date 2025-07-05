import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }, [carrito]);

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
          setCarrito(carritoGuardado); 
        }
      }, []);

      function agregarProducto(producto) {
        const productoExistente = carrito.find((p) => p.id === producto.id);
      
        if (productoExistente) {
          const carritoActualizado = carrito.map((p) => {
            if (p.id === producto.id) {
              return { ...p, cantidad: p.cantidad + 1 };
            }
            return p;
          });
          setCarrito(carritoActualizado);
        } else {
          const nuevoProducto = { ...producto, cantidad: 1 };
          setCarrito([...carrito, nuevoProducto]);
        }
      }

      function eliminarProducto(id){
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
      };

      function vaciarCarrito(){
        setCarrito([]);
      }

    return(
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
         {children}   
        </CarritoContext.Provider>
    )

}