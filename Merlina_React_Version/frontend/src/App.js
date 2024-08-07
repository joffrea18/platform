import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Shoes from './Pages/Shoes';
import Electronic from './Pages/Electronic';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import LoginSingUp from './Pages/LoginSingUp';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shoes/>} />
        <Route path='/electronic' element={<Electronic/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSingUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
