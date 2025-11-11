import React from "react";

export default function ItemDetail({ product }) {
  return (
    <div className="row align-items-center">
      <div className="col-md-5 text-center">
        <img src={product.thumbnail} alt={product.title} className="img-fluid rounded shadow-sm" />
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.description}</p>
        <h4 className="text-primary mb-3">${product.price}</h4>
        <button className="btn btn-dark">Agregar al carrito</button>
      </div>
    </div>
  );
}