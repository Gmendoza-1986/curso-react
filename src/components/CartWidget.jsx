import React, { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx"; 
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="btn btn-outline-dark position-relative"
      style={{
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: "22px" }}>🛒</span>

      {totalItems > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{
            fontSize: "0.7rem",
            padding: "4px 6px",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}