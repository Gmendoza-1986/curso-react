import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

export default function Navbar() {
  // 👇 Tus categorías EXACTAS de Firestore:
  const categorias = ["Celulares", "Notebook", "Tablets"];

  return (
    <nav className="navbar bg-light border-bottom shadow-sm py-3">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-dark">
          📱 CatMarket
        </NavLink>

        {/* Categorías */}
        <ul className="nav mx-auto gap-3">
          {categorias.map((cat) => (
            <li key={cat} className="nav-item">
              <NavLink
                to={`/category/${encodeURIComponent(cat)}`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-primary fw-semibold" : "link-dark"}`
                }
              >
                {cat}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Carrito */}
        <div className="ms-auto">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}