"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    farmer: {
      name: string;
      image: string;
    };
    description: string;
    unit: string;
    harvestDate: string;
    origin: string;
    isOrganic: boolean;
    isSeasonal: boolean;
  };
  onAddToCart: (productId: string) => void;
  onAddToWishlist: (productId: string) => void;
}

const ProductCard = ({
  product,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [farmerImageError, setFarmerImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handleFarmerImageError = useCallback(() => {
    setFarmerImageError(true);
  }, []);

  const handleAddToCart = useCallback(() => {
    onAddToCart(product.id);
  }, [onAddToCart, product.id]);

  const handleAddToWishlist = useCallback(() => {
    onAddToWishlist(product.id);
  }, [onAddToWishlist, product.id]);

  const handleQuickView = useCallback(() => {
    setShowQuickView(true);
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setShowQuickView(false);
  }, []);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 w-full bg-gray-100">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        )}
        {product.isOrganic && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Organic
          </span>
        )}
        {product.isSeasonal && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Seasonal
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-[#315D0D]">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-[#315D0D]">
            ₹{product.price}/{product.unit}
          </p>
        </div>

        {/* Farmer Info */}
        <div className="flex items-center mb-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2 bg-gray-100">
            {!farmerImageError ? (
              <Image
                src={product.farmer.image}
                alt={product.farmer.name}
                fill
                className="object-cover"
                sizes="32px"
                onError={handleFarmerImageError}
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-xs">No image</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600">By {product.farmer.name}</p>
        </div>

        {/* Quick Info */}
        <div className="text-sm text-gray-600 mb-4">
          <p>Harvested: {product.harvestDate}</p>
          <p>Origin: {product.origin}</p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="bg-[#315D0D] text-white px-4 py-2 rounded-md hover:bg-[#315D0D]/90 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="text-gray-600 hover:text-[#315D0D] transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Quick View Button */}
        {isHovered && (
          <button
            onClick={handleQuickView}
            className="absolute bottom-4 right-4 bg-white/90 text-[#315D0D] px-3 py-1 rounded-md text-sm hover:bg-white transition-colors duration-300"
          >
            Quick View
          </button>
        )}
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-[#315D0D]">
                {product.name}
              </h2>
              <button
                onClick={handleCloseQuickView}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 w-full bg-gray-100">
                {!imageError ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <span className="text-gray-400 text-sm">
                      Image not available
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2">
                  <p>
                    <strong>Price:</strong> ₹{product.price}/{product.unit}
                  </p>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Harvest Date:</strong> {product.harvestDate}
                  </p>
                  <p>
                    <strong>Origin:</strong> {product.origin}
                  </p>
                  <p>
                    <strong>Farmer:</strong> {product.farmer.name}
                  </p>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="mt-4 w-full bg-[#315D0D] text-white px-4 py-2 rounded-md hover:bg-[#315D0D]/90 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
