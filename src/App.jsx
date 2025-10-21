import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";


export default function App() {
  const greeting = "Bienvenido al mejor e-commerce de celulares";

  return (
    <>
     
      <Navbar
        logo={{
          name: "Celumarket",
          icon: "📱",
          slogan: "Tecnología a tu alcance",
        }}
      />

      
      <ItemListContainer greeting={greeting} />
    </>
  );
}