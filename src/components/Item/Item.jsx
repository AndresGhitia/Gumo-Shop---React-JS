import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price,}) => {

    return (
        <article className="CardsContainer">
            <section className="Card">
                <img src={img} alt={name} className="CardImg" />
                    <p className="CardName">{name}</p>
                    <p className="CardPrice">${price}</p>
                    <footer>
                        <Link to={`/item/${id}`} className='OptionCard' >Ver detalles</Link>
                    </footer>  
                </section>
        </article>
    )
}

export default Item