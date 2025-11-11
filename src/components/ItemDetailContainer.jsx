import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setTimeout(() => setLoading(false), 400);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="container text-center py-5">Cargando producto...</div>;

  return (
    <div className="container py-5">
      <ItemDetail product={product} />
    </div>
  );
}