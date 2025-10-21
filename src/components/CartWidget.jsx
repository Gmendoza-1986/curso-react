import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget({ count = 3, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-dark rounded-circle position-relative cart-btn"
      aria-label="Carrito"
      onClick={onClick}
    >
      <FaShoppingCart size={18} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
        {count}
      </span>
    </button>
  );
}