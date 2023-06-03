import './ItemDetail.css'
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, price, img, stock, description, effect }) => {
  const [quantityAdded, SetQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    SetQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <article>
      <div className="Box">
        <img src={img} alt={name} className="PedalSize" />
        <div className='BoxDetail'> 
            <p className="TextName"><strong>{name}</strong></p>
            <p className="TextDescription">{description}</p> 
            <p className="TextEffect">{effect}</p>
            <p className="TextPrice">${price}</p>
            <p className="TextStock">STOCK DISPONIBLE:{stock}</p>
          { quantityAdded > 0 ?(
            <Link to= '/cart' className='OptionCard'>Terminar Compra</Link>
            ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            )
          }
        </div>
      </div>
      <Link to='/' className='ButtonHome'>Inicio</Link> 
    </article>
  );
};

export default ItemDetail;
