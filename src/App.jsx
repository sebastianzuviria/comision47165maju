import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos los productos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por Categoria'}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
