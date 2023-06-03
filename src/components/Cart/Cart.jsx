import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem,} = useContext(CartContext);

    if(totalQuantity() === 0) {
        return (
            <div className="Cart">
                <h1>No hay items</h1>
                <Link to='/' className="OptionCard">Productos</Link>
            </div>
        )
    }

    return (
        <div className="Cart">
            <h1>Shopping Cart</h1>
            {cart.map((prod) => 
                <div className="CartItem" key={prod.id}>
                    <p>{prod.name}</p>
                    <p>${prod.price}</p>
                    <p>Cantidad:{prod.quantity}</p>
                    <p>Subtotal:{prod.quantity*prod.price}</p>
                    <button className="RemoveItem" onClick={() => removeItem(prod.id)}>X</button>
                </div> )}
            <h3>Total: ${total()}</h3>
            <div className="CartCheckout">
              <button onClick={() => clearCart()}>Limpiar carrito</button>
              <Link to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;
