import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

import Footer from './Components/Footer/Footer';
import bannermen from './Components/Assets/bannermen.jpeg';
import banner4 from './Components/Assets/banner4.jpeg';
import banner10 from './Components/Assets/banner10.jpg';
import Map from './Components/Map/Map'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={bannermen}   category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner={banner4} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner10} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
        <Map />
      </BrowserRouter>
    </div>
  );
}

export default App;
