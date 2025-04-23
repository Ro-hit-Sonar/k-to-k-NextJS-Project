"use client";

import React, { useState, ChangeEvent } from "react";

interface FilterOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

interface ProductFiltersProps {
  onSearch: (term: string) => void;
  onFilter: (filters: FilterOptions) => void;
  onSort: (sortType: string) => void;
}

const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Grains",
  "Organic",
  "Seasonal",
];

const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
  { label: "Most Popular", value: "popular" },
];

const ProductFilters = ({
  onSearch,
  onFilter,
  onSort,
}: ProductFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilter({ category });
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSort(value);
    onSort(value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
    onFilter({ priceRange: { ...priceRange, [name]: parseInt(value) } });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#315D0D] focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#315D0D] mb-3">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-[#315D0D] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#315D0D] mb-3">
          Price Range
        </h3>
        <div className="flex items-center gap-4">
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            placeholder="Min"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#315D0D] focus:border-transparent"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            placeholder="Max"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#315D0D] focus:border-transparent"
          />
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="text-lg font-semibold text-[#315D0D] mb-3">Sort By</h3>
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#315D0D] focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
