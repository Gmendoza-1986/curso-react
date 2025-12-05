import React, { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleAdd = () => {
    if (stock <= 0) return;
    onAdd(count);
  };

  if (stock <= 0) {
    return <p className="text-danger mt-3">Producto sin stock</p>;
  }

  return (
    <div className="d-flex flex-column align-items-start gap-3 mt-3">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-secondary"
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          -
        </button>

        <span className="fs-5">{count}</span>

        <button
          className="btn btn-outline-secondary"
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-dark"
        onClick={handleAdd}
        disabled={stock <= 0}
      >
        Agregar al carrito
      </button>

      <p className="text-muted mb-0">Stock disponible: {stock}</p>
    </div>
  );
}