import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/layouts/navBar/NavBar';
import ItemListContainer from './componentes/pages/itemListContainer/ItemListContainer';
import Cart from './componentes/pages/cart/Cart';
import ItemDetail from './componentes/pages/itemDetail/ItemDetail';
import Footer from './componentes/layouts/footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:name' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/itemDetail/:id' element={<ItemDetail />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}

export default App
