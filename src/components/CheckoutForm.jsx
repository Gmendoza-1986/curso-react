import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext.jsx";
import { db } from "../firebase/config"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!nombre || !email || !telefono) {
      setError("Por favor completa todos los datos.");
      return;
    }

    if (cart.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    try {
      setLoading(true);

      const order = {
        buyer: { nombre, email, telefono },
        items: cart.map((item) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.quantity,
        })),
        total: totalPrice,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);

      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al generar la orden:", err);
      setError("Ocurrió un error al generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container py-5 text-center">
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p className="mt-3">
          Tu número de orden es:
          <br />
          <strong>{orderId}</strong>
        </p>
        <p className="text-muted mt-3">
          Guarda este código por si necesitas hacer seguimiento de tu pedido.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Checkout</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nombre y apellido</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="col-12 mt-3">
          <p className="fs-5">
            Total a pagar: <strong>${totalPrice}</strong>
          </p>
        </div>

        <div className="col-12 mt-2">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Generando orden..." : "Confirmar compra"}
          </button>
        </div>
      </form>
    </div>
  );
}