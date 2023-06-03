import "./CartWidget.css"
import Carrito from "./Carrito.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
        <Link to='/cart' className="CarritoLogo">
          <img src={Carrito}  alt="Simbolo de carrito de compras" />
          <span >{totalQuantity()}</span>
        </Link>   
  )
}

export default CartWidget