import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const App = () => {
//   const [page, setPage] = useState('list')

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div>
//         <button onClick={() => setPage('list')}>List</button>
//         <button onClick={() => setPage('detail')}>Detail</button>
//       </div>
//       {page === 'list' && <ItemListContainer greeting={'Listado de todos los productos'}/> }
//       {page === 'detail' && <ItemDetailContainer /> }
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/> }/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// import Button from './components/Button/Button'
// import Animation from './components/Animation/Animation'

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       {/* <button onClick={() => setShow(prev => !prev)}>mostrar/ocultar</button>
//       {show && <Button />} */}
//       <Animation />
//     </>
//   )
// }

// export default App