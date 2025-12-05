import React, { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx"; 
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos desde el catálogo.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Carrito de compras</h2>

      <table className="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Cantidad</th>
            <th className="text-center">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.nombre}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    className="rounded"
                  />
                  <div>
                    <div className="fw-semibold">{item.nombre}</div>
                    <div className="text-muted small">
                      {item.categoria} · {item.tipo}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-center">${item.precio}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">
                ${item.precio * item.quantity}
              </td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4 gap-3">
        <button className="btn btn-outline-secondary" onClick={clearCart}>
          Vaciar carrito
        </button>

        <div className="text-end">
          <p className="mb-1">
            Ítems totales: <strong>{totalItems}</strong>
          </p>
          <p className="fs-5 mb-3">
            Total a pagar: <strong>${totalPrice}</strong>
          </p>
          <Link to="/checkout" className="btn btn-primary">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}