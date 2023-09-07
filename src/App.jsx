import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Suscribe from './components/Suscribe';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartProducts from './components/CartProducts';
import Checkout from './components/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <main className='app-container'>
        <section className='app-top'>
          <NavBar/>
          <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/products' element={<ItemListContainer/>} />
            <Route path='/products/:category' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/suscribeCoffe+' element={<Suscribe/>}/>
            <Route path='/CartProducts' element={<CartProducts/>}/>
            <Route path='/Chekout' element={<Checkout/>}/>
          </Routes>
        </section>
        <Footer/>
      </main>
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;
