import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

export default function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        
        <Route path="/" element={<ItemListContainer />} />

       
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

       
        <Route path="/item/:id" element={<ItemDetailContainer />} />

    
        <Route path="/cart" element={<Cart />} />

        
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  );
}