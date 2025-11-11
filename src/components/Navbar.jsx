import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./CartWidget";

export default function Navbar() {

  const categorias = ["Smartphones", "Laptops", "Tablets", "Fragrances", "Sunglasses"];

  return (
    <nav className="navbar bg-light border-bottom shadow-sm py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <NavLink to="/" className="navbar-brand fw-bold text-dark">📱 Catmarket</NavLink>

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

        <div className="ms-auto">
          <CartWidget count={3} />
        </div>
      </div>
    </nav>
  );
}