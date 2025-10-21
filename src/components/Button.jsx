import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-outline-dark nav-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}