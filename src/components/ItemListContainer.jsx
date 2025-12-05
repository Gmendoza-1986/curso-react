import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProductos } from "../firebase/bbdd"; // 👈 ruta corregida

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    let alive = true;

    const fetchData = async () => {
      try {
        setState({ loading: true, error: null });

        const rawProducts = await getProductos();

        const filtrados = categoryId
          ? rawProducts.filter((p) => p.categoria === categoryId)
          : rawProducts;

        if (!alive) return;

        setProducts(filtrados);
        setState({ loading: false, error: null });
      } catch (err) {
        if (!alive) return;
        setState({ loading: false, error: err.message });
      }
    };

    fetchData();

    return () => {
      alive = false;
    };
  }, [categoryId]);

  if (state.loading) {
    return <div className="container text-center py-5">Cargando...</div>;
  }

  if (state.error) {
    return (
      <div className="container text-center py-5 text-danger">
        {state.error}
      </div>
    );
  }

  return (
    <div className="container py-4 text-center">
      <h2 className="text-center mb-4">
        {categoryId ? `Productos en ${categoryId}` : "Catálogo general"}
      </h2>

      {products.length ? (
        <ItemList products={products} />
      ) : (
        <p>No hay productos para mostrar.</p>
      )}
    </div>
  );
}