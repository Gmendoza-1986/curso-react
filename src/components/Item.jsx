import React from "react";
import { NavLink } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">

        {/* Imagen REAL */}
        <img
          src={product.image}
          alt={product.nombre}
          className="card-img-top"
          style={{ objectFit: "cover", height: "180px" }}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{product.nombre}</h5>

          <p className="text-success fw-bold">${product.precio}</p>

          <NavLink 
            to={`/item/${product.id}`} 
            className="btn btn-primary">
            Ver detalle
          </NavLink>
        </div>

      </div>
    </div>
  );
}