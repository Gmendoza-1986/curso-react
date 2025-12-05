import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"; 
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    const fetch = async () => {
      try {
        setState({ loading: true, error: null });

        const ref = doc(db, "productos", id);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setState({ loading: false, error: "Producto no encontrado" });
          return;
        }

        setProduct({ id: snap.id, ...snap.data() });
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };

    fetch();
  }, [id]);

  if (state.loading)
    return <div className="text-center py-5">Cargando producto...</div>;
  if (state.error)
    return <div className="text-center text-danger py-5">{state.error}</div>;

  return (
    <div className="container py-4">
      <ItemDetail product={product} />
    </div>
  );
}