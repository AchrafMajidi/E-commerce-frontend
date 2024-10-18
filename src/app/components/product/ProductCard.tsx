import { ShoppingCart, Heart, Star, Info } from 'lucide-react'

export default function CreativeProductCard() {
  const rating = 4.5;
  const maxRating = 5;

  return (
    <div className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
      <div className="h-64 overflow-hidden relative group">
        <img
          src="/WhatsApp Image 2024-10-18 à 23.15.03_6cec2a0e.jpg?height=256&width=320"
          alt="Product Image"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col justify-between relative">
        <div>
          <h2 className="text-2xl font-bold mb-2">MIMI</h2>
          <p className="text-gray-500 text-sm mb-4">Experience the future with our cutting-edge technology</p>
          <div className="flex items-center mb-4">
            {[...Array(maxRating)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : i < rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">({rating.toFixed(1)})</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">$299.99</span>
            {/* Bouton de like stylisé manuellement */}
            <button className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
              <Heart className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* Bouton d'ajout au panier stylisé manuellement */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </button>
            {/* Bouton de détails stylisé manuellement */}
            <button className="w-full border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100">
              <Info className="mr-2 h-4 w-4" /> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
