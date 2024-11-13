import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/layouts/navBar/NavBar'
import ItemListContainer from './componentes/pages/itemListContainer/ItemListContainer'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:name' element={<ItemListContainer />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
