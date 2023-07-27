import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Footer from './components/Footer/Footer'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Notfound from './pages/Error/Notfound'

const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "eShop-project",
        // path:"/",
        element: <Home />
      },
      {
        path: "*",
        element: <Notfound />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path:"/about",
        element: <About/>
      }
    ]
  },
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
