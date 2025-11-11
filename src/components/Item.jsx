import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="card h-100 text-center shadow-sm">
      {product.thumbnail && (
        <img src={product.thumbnail} alt={product.title} className="card-img-top p-2" />
      )}
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        {product.price != null && <p className="text-muted small">${product.price}</p>}
        <Link to={`/item/${product.id}`} className="btn btn-outline-dark btn-sm">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}