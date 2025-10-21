import React from "react";

export default function ItemListContainer({ greeting }) {
  return (
    <section className="container text-center py-5">
      <h2 className="fw-bold">{greeting}</h2>
    </section>
  );
}