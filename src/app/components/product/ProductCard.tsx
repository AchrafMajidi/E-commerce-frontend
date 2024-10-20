import { ShoppingCart, Heart, Star, Package } from 'lucide-react';

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

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-80 relative">
        <img
          src={imageUrl}
          alt="Product Image"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold text-primary-foreground bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-full animate-pulse shadow-lg shine-effect">
          Nouveau produit
        </span>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">{price} DH</span>
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-1" />
            <span>{availableItems} in stock</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${i < Math.floor(rating) ? 'text-red-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1 text-xl">({rating})</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button className="col-span-2 flex items-center justify-center px-4 py-2 border border-primary bg-white text-primary hover:bg-gray-100 rounded-md hover:bg-primary transition-colors">
            <ShoppingCart className="mr-2 h-5 w-5 text-red-500" /> 
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Heart className="h-5 w-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
