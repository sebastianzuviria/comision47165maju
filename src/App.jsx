import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import classes from './App.module.css'
import Button from './components/Button/Button'
import Count from './components/Count/Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: 'red', fontSize: 20}}>Comision 47165</h1>
      <h2 className={classes.title}>Clase de Instalacion y configuracion del entorno</h2>
      <div className="card">


        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}


        {/* <Button label={`count is ${count}`} color='orange' callback={() => setCount((count) => count + 1)}/>
        <Button label='inicio' color='red' callback={() => console.log('inicio')}/>
        <Button label='contacto' color='blue' callback={() => console.log('contacto')}/>
        <Button label='nosotros' color='green' callback={() => console.log('nosotros')}/> */}
      {/* </div>
      <p className="read-the-docs">
        Click aca
      </p> */}
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Count />
    </>
  )
}

export default App
