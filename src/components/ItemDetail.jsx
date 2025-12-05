import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext.jsx"; 
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const stock = product.stock ?? 10;

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="row align-items-center justify-content-center py-4">
      <div className="col-md-5 text-center">
        <img
          src={product.image}
          alt={product.nombre}
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: "350px", objectFit: "contain" }}
        />
      </div>

      <div className="col-md-6">
        <h2 className="fw-bold mb-2">{product.nombre}</h2>
        <p className="text-muted mb-2">{product.descripcion}</p>

        <p className="mb-1">
          <strong>Categoría:</strong> {product.categoria}
        </p>
        <p className="mb-3">
          <strong>Tipo:</strong> {product.tipo}
        </p>

        <h3 className="text-success mb-3">${product.precio}</h3>

        {!added ? (
          <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <Link to="/cart" className="btn btn-success">
              Ir al carrito
            </Link>
            <Link to="/" className="btn btn-outline-secondary">
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}