import React from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget";

export default function Navbar({ logo }) {
  const categorias = ["Samsung", "Apple", "Motorola", "Huawei", "Xiaomi"];

  return (
    <nav className="navbar bg-light border-bottom shadow-sm py-3">
      <div className="container d-flex align-items-center justify-content-between">
       
        <a
          href="#"
          className="navbar-brand d-flex align-items-center fw-bold text-dark"
        >
          <span
            className="d-inline-flex align-items-center justify-content-center me-2"
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              borderRadius: "50%",
              width: "38px",
              height: "38px",
              fontSize: "1.2rem",
            }}
          >
            {logo.icon}
          </span>
          <div className="d-flex flex-column lh-1">
            <span>{logo.name}</span>
            <small className="text-muted" style={{ fontSize: "0.75rem" }}>
              {logo.slogan}
            </small>
          </div>
        </a>

      
        <ul className="nav mx-auto gap-3">
          {categorias.map((c) => (
            <li key={c} className="nav-item">
              <a href="#" className="nav-link link-dark nav-link-hover">
                {c}
              </a>
            </li>
          ))}
        </ul>

       
        <div className="ms-auto">
          <CartWidget count={3} />
        </div>
      </div>
    </nav>
  );
}