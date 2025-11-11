import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  if (!Array.isArray(products)) return null;
  return (
    <div className="row g-4">
      {products.map((p) => (
        <div className="col-12 col-md-4 col-lg-3" key={p.id}>
          <Item product={p} />
        </div>
      ))}
    </div>
  );
}