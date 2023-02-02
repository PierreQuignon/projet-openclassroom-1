import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import CareScale from './CareScale';
import '../styles/Container-plants.css';
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div>
      <Banner />
      <div className="container_plants">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
      <CareScale />
    </div>
  );
}

export default App;
