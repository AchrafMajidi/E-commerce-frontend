"use client";

import React, { useState, useEffect } from "react";
import {
  Search, User, Heart, ShoppingCart, Camera, ArrowLeft, Globe, Menu, Check,
} from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";

// Déclaration des types des props
interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  placeholder: string;
}

function SearchBar({ searchValue, setSearchValue, placeholder }: SearchBarProps) {
  return (
    <div className="relative w-[400px]">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
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
          className="absolute left-2 my-auto top-0 bottom-0 pl-1 text-black focus:outline-none"
          onClick={() => setSearchValue("")}
        >
          <AiOutlineClose size={20} />
        </button>
      )}
    </div>
  );
}

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Français");
  const [cartCount, setCartCount] = useState(3); // Nombre d'articles dans le panier

  const placeholders = [
    "Cherchez-vous quelque chose?...", 
    "Produits naturels...", 
    "Trouver les bonnes offres...", 
    "Vêtements pour femmes..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategoriesMenu = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {!isSearchOpen && (
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Yakouta</span>
            </div>
          )}

          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              placeholder={placeholders[placeholderIndex]}
            />
          </div>

          <div className="hidden sm:flex items-center">
            <button className="bg-transparent border-none p-2">
              <User size={25} />
            </button>
            <button className="bg-transparent border-none p-2">
              <Heart size={25} />
            </button>

            <div className="relative p-2">
              <button className="bg-transparent border-none">
                <ShoppingCart size={25} />
              </button>

              {/* Badge du panier */}
              {cartCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <div className="flex items-center w-full">
              {isSearchOpen ? (
                <>
                  <button className="p-2" onClick={() => setIsSearchOpen(false)}>
                    <ArrowLeft size={25} />
                  </button>
                  <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    placeholder={placeholders[placeholderIndex]}
                  />
                </>
              ) : (
                <>
                  <button className="p-2" onClick={() => setIsSearchOpen(true)}>
                    <Search size={25} />
                  </button>
                  <button className="p-2">
                    <User size={25} />
                  </button>
                  <button className="p-2">
                    <Heart size={25} />
                  </button>

                  <div className="relative p-2">
                    <button className="bg-transparent border-none">
                      <ShoppingCart size={25} />
                    </button>
                    {cartCount > 0 && (
                      <span 
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                      >
                        {cartCount}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <button
              onClick={toggleCategoriesMenu}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-lg border-none hover:from-purple-600 hover:to-pink-600 flex items-center"
            >
              <Menu className="mr-2 h-4 w-4" />
              Catégories
            </button>
            {isCategoriesOpen && (
              <ul className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-1">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Électronique</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mode</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Maison & Jardin</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sports & Loisirs</li>
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-lg border-none hover:from-teal-500 hover:to-blue-600 flex items-center"
            >
              <Globe className="mr-2 h-4 w-4" />
              Langue
            </button>
            {isLanguageOpen && (
              <ul className="absolute mt-2 right-0 w-48 bg-white shadow-lg rounded-lg py-1">
                {["Français", "Deutsch"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                  >
                    {lang}
                    {selectedLanguage === lang && <Check className="h-4 w-4 text-teal-500" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
