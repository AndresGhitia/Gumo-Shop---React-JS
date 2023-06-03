import './Checkout.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch, Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date())
      };

      const batch = writeBatch(db)
      const outOfStock = []

      const productsRef = collection(db, 'products')
      const ids = cart.map(prod => prod.id)

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
      const docs = productsAddedFromFirestore.docs

      docs.forEach(doc => {
        const dataDoc = doc.data()
        let stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
      } else {
        console.error('Fuera de stock')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Su orden está siendo generada</h1>;
  }

  if (orderId) {
    return <div className='Box'>
              <div className='BoxDetail'>
                <p className='TextCompra'>Compra Exitosa</p>
                <p className='TextOrder'>Numero de Orden</p>
                <p className='TextId'> {orderId}</p>
                <p className='TextEffect'>El Numero de Orden es un documento importante que certifica la compra que has realizado en nuestra tienda. Te recomendamos que lo guardes, ya que podría ser necesario en caso de cambios, devoluciones o para hacer valer cualquier garantía que pueda aplicar a tu compra.</p>
                <Link to='/' className='ButtonHome'>Aceptar</Link>
              </div>
          </div>
    
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
