import { Products } from './components/Products'
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { useData } from './hooks/useData';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  const {products} = useData();
  const {filterProducts} = useFilters();
  const filteredProducts = filterProducts(products); 
  
  return (
    <CartProvider>
      <h1>Carrito de compras</h1>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
    </CartProvider>
  )
}

export default App
