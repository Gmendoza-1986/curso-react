import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";


export const getProductos = async () => {
  const snapshot = await getDocs(collection(db, "productos"));

  const productos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productos;
};