import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//por si no cargan los productos, no dejar la pantalla en blanco
const fallbackProducts = [
  { id: 101, title: "iPhone 14", price: 999, thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg" },
  { id: 102, title: "Samsung S23", price: 899, thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg" },
  { id: 103, title: "Xiaomi 13", price: 699, thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg" },
  { id: 104, title: "Motorola Edge", price: 549, thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg" },
];

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setState({ loading: true, error: null });
        const url = categoryId
          ? `https://dummyjson.com/products/category/${encodeURIComponent(categoryId)}`
          : "https://dummyjson.com/products?limit=12";

        console.log("[ItemListContainer] fetching:", url);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log("[ItemListContainer] data:", data);

        const items = Array.isArray(data.products) ? data.products : [];
        if (alive) setProducts(items);
      } catch (err) {
        console.error("[ItemListContainer] error:", err);
        if (alive) {
          setProducts([]); 
          setState({ loading: false, error: err.message || "Error" });
          return;
        }
      } finally {
        if (alive) setState((s) => ({ ...s, loading: false }));
      }
    })();

    return () => { alive = false; };
  }, [categoryId]);

  if (state.loading) return <div className="container text-center py-5">Cargando...</div>;

  
  const list = products.length ? products : fallbackProducts;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        {categoryId ? `Productos en ${categoryId}` : "Conoce nuestro catálogo"}
      </h2>

      {state.error && products.length === 0 && (
        <p className="text-center text-warning mb-3">
          Mostrando datos de ejemplo (API no disponible): {state.error}
        </p>
      )}

      <ItemList products={list} />
    </div>
  );
}