
import './Cart.css'
export const CartItem = ({title, thumbnail, price, id, quantity, addToCart}) => {
  return (
    <>
      <li key={id}>
        <img src={thumbnail} alt={title} />
      </li>
      <div>
        <strong>{title}</strong> - $ {price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </>
  );
};
