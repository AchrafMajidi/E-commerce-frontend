import { ShoppingCart, Heart, Star, Package } from 'lucide-react';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
  availableItems: number;
}

interface CreativeProductCardProps {
  product: Product;
}

export default function CreativeProductCard({ product }: CreativeProductCardProps) {
  const { imageUrl, title, price, rating, availableItems } = product;

  const [isLiked, setIsLiked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      // Montre les confettis uniquement si le cœur n'était pas aimé auparavant
      setShowConfetti(true);
      // Arrêter les confettis après un court instant
      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    }
    setIsLiked((prev) => !prev); // Change l'état aimé
  };

  return (
    <div className="relative w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full z-10">
          <Confetti width={windowWidth} height={windowHeight} />
        </div>
      )}
      <div className="h-60 relative">
        <img
          src={imageUrl}
          alt="Product Image"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <span className="absolute top-2 right-2 px-1 py-0.5 text-xs font-semibold text-primary-foreground bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-full animate-pulse shadow-lg shine-effect">
          Nouveau produit
        </span>
      </div>
      <div className="p-3">
        <h2 className="font-bold text-md mb-2">{title}</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">{price} DH</span>
          <div className="flex items-center">
            <Package className="w-3 h-3 mr-1" />
            <span className="text-sm">{availableItems} en stock</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${i < Math.floor(rating) ? 'text-red-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1 text-sm">({rating})</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <button className="col-span-2 flex items-center justify-center px-3 py-1.5 border border-primary bg-white text-primary hover:bg-gray-100 rounded-md hover:bg-primary transition-colors">
            <ShoppingCart className="mr-1 h-4 w-4 text-red-500" /> 
          </button>
          <button
            onClick={handleLike}
            className="flex items-center justify-center px-3 py-1.5 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
