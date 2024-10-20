import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './ProductCard';
import productsData from '../data/products.json'; // Importation du fichier JSON

// Définition de l'interface pour les props du composant
interface ProductGridProps {
  products?: Product[]; // Les produits sont facultatifs ici
}

const ProductGrid: React.FC<ProductGridProps> = ({ products = productsData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Assurez-vous que product.id existe
      ))}
    </div>
  );
};

export default ProductGrid;
