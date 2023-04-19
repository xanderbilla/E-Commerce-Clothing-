import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cart, LoginPage, Main, SignUpPage, ProductList, ProductPage, User, Verify } from './fashion/Routes';
import Navbar from './fashion/components/Navbar';
import Footer from './fashion/components/Footer';
import MiniNavbar from './fashion/components/MiniNavbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MiniNavbar />
        <Routes>
          <Route path="/">
            <Route path='fashion'>
                  <Route index element={<Main />} />
                  <Route path='cart' element={<Cart />} />
                  <Route path='verify' element={<Verify />} />
                  <Route path='user' element={<User />} />
                  <Route path='product/:productId' element={<ProductPage />} />
                  <Route path=':catName' >
                    <Route index element={<ProductList />} />
                  </Route>
                  <Route path='signup' element={<SignUpPage />} />
                  <Route path='signin' element={<LoginPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
