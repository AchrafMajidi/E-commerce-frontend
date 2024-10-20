// src/app/page.tsx
"use client";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/header";
import ProductGrid from "./components/product/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      {/* Section principale avec la grille des produits */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Nos Produits</h1>
        
        {/* Afficher la grille des produits */}
        <ProductGrid />
      </main>
    </>
  );
}
