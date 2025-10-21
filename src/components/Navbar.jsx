import React from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget";

// Si luego usas React Router, estos <a> pueden pasar a <NavLink> sin problema.
export default function Navbar() {
  const categorias = ["Samsung", "Apple", "Motorola", "Huawei", "Xiaomi"];

  return (
    <nav className="navbar bg-light border-bottom shadow-sm py-3">
      <div className="container d-flex align-items-center">
        {/}
        <a href="#" className="navbar-brand fw-bold">Ecommercs celulares</a>

        {}
        <ul className="nav mx-auto gap-3">
          {categorias.map((c) => (
            <li key={c} className="nav-item">
              <a href="#" className="nav-link link-dark nav-link-hover">{c}</a>
            </li>
          ))}
        </ul>

        {}
        <div className="ms-auto">
          <CartWidget count={3} />
        </div>
      </div>
    </nav>
  );
}