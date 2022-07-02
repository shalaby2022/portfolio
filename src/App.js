import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer';
import Navigator from './components/navbar';
import SignUp from './components/signUp';
import Container from './pages/counter';
import Home from './pages/home';
import Products from './pages/products';
import Prodcut from './pages/products/Product';
import Todo from './pages/todo/Todo';



function App() {

  return  <BrowserRouter>
          <Navigator/>
          <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/Products" element={<Products/>}/>  
            <Route path="/Products/:id" element={<Prodcut/>}/>  
            <Route path="/todo" element={<Todo/>}/>  
            <Route path="/donate" element={<Container/>}/>  
            <Route path="/signup" element={<SignUp/>}/>  
          </Routes>
    </BrowserRouter>
}

export default App;
