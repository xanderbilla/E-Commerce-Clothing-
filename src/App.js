import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Cart, LoginPage, Main, SignUpPage, ProductList, ProductPage, ProfilePage } from './static/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiniNavbar from './components/MiniNavbar';
import Error from './pages/Error';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MiniNavbar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path='/category/:catName' element={<ProductList />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/signin' element={<LoginPage />} />
            <Route path='*' element={<Error />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
