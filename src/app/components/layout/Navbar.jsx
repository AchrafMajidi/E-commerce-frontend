import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingCart, Camera, ArrowLeft, Mic, Globe, Menu } from "lucide-react"
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Pour gérer la visibilité de la barre de recherche

  const placeholders = ["Cherchez-vous quelque chose?...", "Produits naturels...", "Trouver les bonnes offres...", "vetements pour femmes..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible); // Basculez la visibilité lors du clic
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Yakouta</Link>
        </div>
        
        <div className="relative hidden md:flex w-1/3">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={placeholders[placeholderIndex]}
            className="w-full px-4 py-2 pr-24 pl-8 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="absolute right-14 top-0 bottom-0 px-4 text-black rounded-lg focus:outline-none">
            <Camera size={23} />
          </button>
          <button className="absolute right-0 top-0 bottom-0 px-5 bg-black text-white rounded-full focus:outline-none">
            <Search size={23} />
          </button>
          {searchValue && (
            <button
              className="absolute left top-0 bottom-0 px-3 text-black focus:outline-none"
              onClick={() => setSearchValue("")}
            >
              <AiOutlineClose size={20} />
            </button>
          )}
        </div>

        {/* Icônes pour desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/profile" className="relative">
            <User size={24} className="text-black" />
          </Link>
          <Link href="/favorites" className="relative">
            <Heart size={24} className="text-black" />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} className="text-black" />
          </Link>
        </div>
      </div>

      {/* Barre de recherche et icônes pour mobile */}
      <div className="md:hidden flex justify-between items-center py-2 relative w-full px-4">
        {isSearchVisible ? (
          <div className="w-full relative flex justify-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholders[placeholderIndex]}
              className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="absolute right-14 top-0 bottom-0 px-4 text-black rounded-lg focus:outline-none">
              <Camera size={23} />
            </button>
            <button className="absolute right-0 top-0 bottom-0 px-5 bg-black text-white rounded-full focus:outline-none"
            onClick={handleSearchClick}>
              <Search size={23} />
            </button>
            {searchValue && (
              <button
                className="absolute left top-0 bottom-0 px-3 text-black focus:outline-none"
                onClick={() => setSearchValue("")}
              >
                <AiOutlineClose size={20} />
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-6 ">
            <Link href="/favorites">
              <Heart size={24} className="text-black" />
            </Link>
            <Link href="/cart">
              <ShoppingCart size={24} className="text-black" />
            </Link>
            <Link href="/profile">
              <User size={24} className="text-black" />
            </Link>
            <button 
              onClick={handleSearchClick} 
              className="px-5 bg-black text-white rounded-full focus:outline-none"
            >
              <Search size={23} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
