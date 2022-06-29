import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import About from './pages/about';
import Container from './pages/counter';
import Home from './pages/home';
import Products from './pages/products';
import Prodcut from './pages/products/Product';


function App() {

  return  <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/about" element={<About/>}/>  
            <Route path="/Products" element={<Products/>}/>  
            <Route path="/Products/:id" element={<Prodcut/>}/>  
            <Route path="/counter" element={<Container/>}/>  
          </Routes>
    </BrowserRouter>
}

export default App;
