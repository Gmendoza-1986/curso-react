import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });
  const [limit, setLimit] = useState(12); // 👈 cantidad inicial

  useEffect(() => {
    let alive = true;
    setProducts([]);
    setState({ loading: true, error: null });

    const fetchProducts = async () => {
      try {
        const url = categoryId
          ? `https://dummyjson.com/products/category/${encodeURIComponent(categoryId)}?limit=${limit}`
          : `https://dummyjson.com/products?limit=${limit}`;
        console.log("[fetch]", url);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const items = Array.isArray(data.products) ? data.products : [];

        if (alive) setProducts(items);
      } catch (err) {
        if (alive) setState({ loading: false, error: err.message || "Error" });
      } finally {
        if (alive) setState((s) => ({ ...s, loading: false }));
      }
    };

    fetchProducts();
    return () => { alive = false; };
  }, [categoryId, limit]); //carga más productos

  if (state.loading) return <div className="container text-center py-5">Cargando...</div>;
  if (state.error) return <div className="container text-center py-5 text-danger">Error: {state.error}</div>;

  return (
    <div className="container py-4 text-center">
      <h2 className="text-center mb-4">
        {categoryId ? `Productos en ${categoryId}` : "Conoce nuestro catálogo completo"}
      </h2>

      {products.length ? (
        <>
          <ItemList products={products} />

       
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={() => setLimit((prev) => prev + 8)} 
            >
              Ver más productos
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">No hay productos.</p>
      )}
    </div>
  );
}