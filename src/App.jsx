import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Button, ItemListContainer } from './components'



function App() {
  const [quantity, setQuantity] = useState(0)
  const handleClickUp = () => { 
    setQuantity(quantity + 1);
  }  

  const handleClickDown = () => { 
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }  

  return (
    <>
      <Navbar quantity={ quantity } />
      <Button callback={ handleClickUp } text="Agregar al carrito"></Button>
      <Button callback={handleClickDown} text="Quitar del carrito" ></Button>
      <ItemListContainer text="Aca van a ir mis items."></ItemListContainer>
    </>
  )
}

export default App
