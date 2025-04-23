"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="bg-[#6EBA70] font-medium sticky top-0 z-50">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                खेत-to-Kitchen
              </Link>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:ml-auto md:mr-auto flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
          >
            <Link
              href="/"
              className={`mr-5 mb-3 md:mb-0 px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/") ? "bg-white/20 font-bold" : "hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`mr-5 mb-3 md:mb-0 px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/products")
                  ? "bg-white/20 font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              Products
            </Link>
            <Link
              href="/about_us"
              className={`mr-5 mb-3 md:mb-0 px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/about_us")
                  ? "bg-white/20 font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact_us"
              className={`mr-5 mb-3 md:mb-0 px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive("/contact_us")
                  ? "bg-white/20 font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
