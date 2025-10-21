import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido al mejor e-commerce de celulares" />
    </>
  );
}