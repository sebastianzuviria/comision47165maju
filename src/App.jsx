import './App.css'
import { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
      </Suspense>
      <ItemListContainer greeting={'Listado de todos los productos'}/>
    </>
  )
}

export default App

// import './App.css'
// import { lazy, Suspense } from 'react'

// const Navbar = lazy(() => import('./components/Navbar/Navbar'))
// import ItemListContainer  from './components/ItemListContainer/ItemListContainer'

// const App = () => {
//   return (
//     <>
//       <Suspense fallback={<h1>Loading...</h1>}>
//         <Navbar />
//         <ItemListContainer greeting={'Listado de todos los productos'}/>
//       </ Suspense>
//     </>
//   )
// }

// export default App







// import './App.css'
// import { lazy, Suspense } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { CartProvider } from './context/CartContext'
// import { NotificationProvider } from './notification/NotificationService'

// import Navbar from './components/Navbar/Navbar'
// import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
// const ItemDetailContainer = lazy(() => import('./components/ItemDetailContainer/ItemDetailContainer'))
// const Cart = lazy(() => import('./components/Cart/Cart'))
// const Checkout = lazy(() => import('./components/Checkout/Checkout'))

// const App = () => {
//   return (
//     <>
//         <NotificationProvider>
//           <CartProvider>
//             <BrowserRouter>
//                 <Navbar />
//                   <Routes>
//                     <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/> }/>
//                     <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>} />
//                     <Route path='/detail/:productId' element={<Suspense fallback={<h1>Loading...</h1>}><ItemDetailContainer /></Suspense>} />
//                     <Route path='/cart' element={<Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>} />
//                     <Route path='/checkout' element={<Suspense fallback={<h1>Loading...</h1>}><Checkout /></Suspense>} />
//                     <Route path='*' element={<h1>Error 404 Not Found</h1>} />
//                   </Routes>
//             </BrowserRouter>
//           </CartProvider>
//         </NotificationProvider>
//     </>
//   )
// }

// export default App