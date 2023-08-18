// import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useRef, useState, useEffect } from 'react' 
// function App() {
//   return (
//     <>
//       <Navbar />
//       <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>
//     </>
//   )
// }

// export default App

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1 style={{ color: props.color}}>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }


// function App() {
//   return (
//     <>
//       <Layout title={'Primera pagina'} color='red'>
//         <p>Este seria el texto de la primera pagina</p>
//         <p>Este seria el texto de la primera pagina</p>
//       </Layout>
//       <Layout title={'Segunda pagina'} color='blue'>
//         <p>Este seria el texto de la segunda pagina</p>
//       </Layout>
//     </>
//   )
// }

// export default App

// function App() {
//   const [count, setCount] = useState(0)

//   const renderCountRef = useRef(0)
//   renderCountRef.current++
//   console.log(renderCountRef)

//   const handleClick = () => {
//     setCount(prev => prev + 1)
//   }

//   return (
//     <>
//       <h1>Ejemplo useRef</h1>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Count + 1</button>
//     </>
//   )
// }

// export default App

// function App() {
//   const divRef = useRef()

//   const cambiarTexto = () => {
//     console.log(divRef)
//     divRef.current.innerHTML = 'nuevo texto'
//   }

//   return (
//     <>
//       <div>
//         <div ref={divRef}>Primer texto</div>
//         <button onClick={cambiarTexto}>Cambiar texto</button>
//       </div>
//     </>
//   )
// }

// export default App

// const Count = () => {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log(count)
//     document.title = 'Count: ' + count

//     return () => {
//       console.log('limpieza')
//       document.title = 'Vite + React'
//     }
//   }, [count])

//   const increment = () => {
//     setCount(count => count + 1)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   )
// }

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShow(show => !show)}>Mostrar/No Mostrar</button>
//       {show ? <Count /> : null}
//     </>
//   )
// }

// export default App


// const ContadorDeVueltas = () => {
//   const [vuelta, setVuelta] = useState(1)
//   const [vuelta2, setVuelta2] = useState(0)
//   console.log(vuelta)
//   const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0)
//   const [datosUltimaVuelta, setDatosUltimaVuelta] = useState({
//     vuelta: 0,
//     tiempo: 0
//   })

//   useEffect(() => {
//     document.title = 'Vuelta: ' + vuelta

//     return () => {
//       document.title = 'Vite + React'
//     }
//   }, [vuelta])

//   useEffect(() => {
//     setTiempoEnSegundos(0)
//     const intervarlId = setInterval(() => {
//       setTiempoEnSegundos(prev => prev + 1)
//     }, 1000)

//     return () => {
//       clearInterval(intervarlId)
//     }
//   }, [vuelta])

//   // useEffect(() => {
//   //   setVuelta2(vuelta)
//   // }, [vuelta])

//   const finalizarVuelta = () => {
//     setDatosUltimaVuelta({ vuelta: vuelta, tiempo: tiempoEnSegundos})
//     setVuelta(prev => prev + 1)
//     setVuelta2(vuelta)

//   }

//   return (
//     <div>
//       <h1>Contador de vueltas</h1>
//       <h2>Vuelta actual: {vuelta}</h2>
//       <h2>Vuelta2 actual: {vuelta2}</h2>
//       <h2>Segundos: {tiempoEnSegundos}seg</h2>
//       <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
//       <h2>Datos ultima vuelta</h2>
//       <h3>Nro Vuelta: {datosUltimaVuelta.vuelta}</h3>
//       <h3>Tiempo: {datosUltimaVuelta.tiempo}seg</h3>
//     </div>
//   )
// }





// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShow(show => !show)}>Mostrar/No Mostrar</button>
//       {show ? <ContadorDeVueltas /> : null}
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  )
}

export default App