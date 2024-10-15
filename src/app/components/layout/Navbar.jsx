"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiHeart, CiSearch, CiUser, CiCamera, CiShoppingCart } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; 
import { FaMicrophone } from "react-icons/fa"; // Remplacez ici par l'importation correcte

const Navbar = () => {
  const [searchValue, setSearchValue] = useState(""); 
  const [placeholderIndex, setPlaceholderIndex] = useState(0); 
  const placeholders = ["Cherchez-vous quelque chose?", "Produits naturels...", "Trouver les bonnes offres...", "vetements pour femmes..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Shopify</Link>
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
            <CiCamera size={23} />
          </button>
          <button className="absolute right-0 top-0 bottom-0 px-5 bg-black text-white rounded-full focus:outline-none">
            <CiSearch size={23} />
          </button>
          {searchValue && (
            <button
              className="absolute left top-0 bottom-0 px-3 text-black focus:outline-none"
              onClick={() => setSearchValue("")}
            >
              <AiOutlineClose size={20} />
            </button>
          )}
          {/* Ajoutez le bouton de microphone ici */}
          <button className="absolute right-24 top-0 bottom-0 px-4 text-black rounded-lg focus:outline-none">
            <FaMicrophone size={23} /> {/* Utilisez l'icône de microphone ici */}
          </button>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <span className="cursor-pointer">
              <CiUser size={24} className="text-black" />
            </span>
            <div className="absolute right-0 w-48 p-2 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block">
              <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                My Profile
              </Link>
              <Link href="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Orders
              </Link>
              <Link href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          </div>
          <Link href="/favorites" className="relative">
            <CiHeart size={24} className="text-black" />
          </Link>
          <Link href="/cart" className="relative">
            <CiShoppingCart size={24} className="text-black" />
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-center py-2 relative w-full px-4">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue("")}
          placeholder={placeholders[placeholderIndex]}
          className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="absolute right-14 top-0 bottom-0 px-4 text-black rounded-lg focus:outline-none">
          <CiCamera size={23} />
        </button>
        <button className="absolute right-0 top-0 bottom-0 px-5 bg-black text-white rounded-full focus:outline-none">
          <CiSearch size={23} />
        </button>
        {searchValue && (
          <button
            className="absolute right-20 top-0 bottom-0 px-3 text-black focus:outline-none"
            onClick={() => setSearchValue("")}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
        {/* Ajoutez le bouton de microphone ici pour la vue mobile */}
        <button className="absolute right-24 top-0 bottom-0 px-4 text-black rounded-lg focus:outline-none">
          <FaMicrophone size={23} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
