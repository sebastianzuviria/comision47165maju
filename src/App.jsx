import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'

import Navbar from './components/Navbar/Navbar'
const ItemListContainer = lazy(() => import('./components/ItemListContainer/ItemListContainer'))
const ItemDetailContainer = lazy(() => import('./components/ItemDetailContainer/ItemDetailContainer'))
const Cart = lazy(() => import('./components/Cart/Cart'))
const Checkout = lazy(() => import('./components/Checkout/Checkout'))

const App = () => {
  return (
    <>
        <NotificationProvider>
          <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/> }/>
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<h1>Error 404 Not Found</h1>} />
                  </Routes>
                </Suspense>
            </BrowserRouter>
          </CartProvider>
        </NotificationProvider>
    </>
  )
}

export default App