/* eslint-disable react/prop-types */
import './Products.css';
import {AddToCartIcon, RemoveFromCartIcon} from '../components/Icon'
import { useCart } from '../hooks/useCart';

export const Products = ({products}) => {

    const { addToCart, cart, removeFromCart } = useCart();

    const checkProductInCart = product =>{
        return cart.some(item => item.id === product.id);
    }

  return (
    <main className='products'>
        <ul>
            {
                products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <strong> categoria:</strong> {product.category}
                            </div>
                            <div>
                                <button 
                                    onClick={ () => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}
                                    style={{
                                        backgroundColor: isProductInCart ? 'red' : 'green'
                                    }}
                                >
                                    {
                                        isProductInCart
                                        ? <RemoveFromCartIcon></RemoveFromCartIcon>
                                        : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </main>
  )
}
