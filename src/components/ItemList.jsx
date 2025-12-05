import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}