import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { GlobalCss } from './styles'
import Header from './components/Header'
// import Banner from './components/Banner'
// import Product from './components/Product'
// import ProductsList from './components/ProductsList'
// import Home from './pages/Home'
// import Categories from './pages/Categories'

// const rotas = createBrowserRouter([
//   {
//     // caminho
//     path: '/',
//     // o que vai ser renderizado
//     element: (
//       // <>
//       //   <Banner />
//       //   <ProductsList title="Promoções" background="gray" />
//       //   <ProductsList title="Em breve" background="black" />
//       // </>
//       <Home />
//     )
//   },
//   {
//     path: '/categorias',
//     element: <Categories />
//   }
// ])

// const Rotas = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/categories" element={<Categories />} />
//   </Routes>
// )

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      {/* essa classe foi criada lá na styles global */}
      <div className="container">
        <Header />
      </div>
      {/* era assim...
      <Banner /> */}
      {/* <RouterProvider router={rotas} /> */}
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
