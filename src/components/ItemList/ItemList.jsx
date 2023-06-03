import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="Filas">
      <div className="Fila1">
        {products.slice(0, 4).map((prod) => (
          <div key={prod.id} className="Columna">
            <Item {...prod} />
          </div>
        ))}
      </div>
      <div className="Fila2">
        {products.slice(4).map((prod) => (
          <div key={prod.id} className="Columna">
            <Item {...prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
