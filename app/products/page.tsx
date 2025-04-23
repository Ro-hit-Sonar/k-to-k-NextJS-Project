"use client";

import React, { useState, useCallback } from "react";
import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/ProductCard";

interface Product {
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
}

interface FilterOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

// Dummy data with only available images
const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    price: 80,
    image: "/tomato.png",
    category: "Vegetables",
    farmer: {
      name: "Ramesh Singh",
      image: "/farmer1.png",
    },
    description:
      "Fresh, organic tomatoes grown with care in our farm. Perfect for salads and cooking.",
    unit: "kg",
    harvestDate: "2024-03-15",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "2",
    name: "Fresh Carrots",
    price: 50,
    image: "/carrot.png",
    category: "Vegetables",
    farmer: {
      name: "Ramesh Singh",
      image: "/farmer1.png",
    },
    description: "Sweet and crunchy carrots, perfect for salads and cooking.",
    unit: "kg",
    harvestDate: "2024-03-10",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "3",
    name: "Farm Fresh Milk",
    price: 60,
    image: "/milk.png",
    category: "Dairy",
    farmer: {
      name: "Hari Chand",
      image: "/farmer3.png",
    },
    description: "Pure, unadulterated milk from our happy cows.",
    unit: "liter",
    harvestDate: "2024-03-15",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "4",
    name: "Organic Wheat",
    price: 120,
    image: "/wheat.png",
    category: "Grains",
    farmer: {
      name: "Arvind Patel",
      image: "/farmer5.png",
    },
    description: "High-quality organic wheat, perfect for making fresh bread.",
    unit: "kg",
    harvestDate: "2024-02-28",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "5",
    name: "Fresh Potatoes",
    price: 45,
    image: "/patato.png",
    category: "Vegetables",
    farmer: {
      name: "Sita Devi",
      image: "/farmer2.png",
    },
    description: "Fresh organic potatoes, perfect for all your cooking needs.",
    unit: "kg",
    harvestDate: "2024-03-12",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "6",
    name: "Organic Rice",
    price: 150,
    image: "/rice.png",
    category: "Grains",
    farmer: {
      name: "Arvind Patel",
      image: "/farmer5.png",
    },
    description: "Premium quality organic rice, perfect for daily meals.",
    unit: "kg",
    harvestDate: "2024-02-15",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "7",
    name: "Fresh Cucumber",
    price: 40,
    image: "/cucumber.png",
    category: "Vegetables",
    farmer: {
      name: "Ramesh Singh",
      image: "/farmer1.png",
    },
    description: "Crisp and refreshing cucumbers, perfect for salads.",
    unit: "kg",
    harvestDate: "2024-03-14",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "8",
    name: "Fresh Chilli",
    price: 30,
    image: "/chilli.png",
    category: "Vegetables",
    farmer: {
      name: "Sita Devi",
      image: "/farmer2.png",
    },
    description:
      "Spicy and flavorful chillies, perfect for adding heat to your dishes.",
    unit: "kg",
    harvestDate: "2024-03-13",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "9",
    name: "Fresh Bhendi",
    price: 35,
    image: "/bhendi.png",
    category: "Vegetables",
    farmer: {
      name: "Hari Chand",
      image: "/farmer3.png",
    },
    description: "Tender and fresh bhendi, perfect for curries and stir-fries.",
    unit: "kg",
    harvestDate: "2024-03-14",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "10",
    name: "Fresh Corn",
    price: 25,
    image: "/corn.png",
    category: "Vegetables",
    farmer: {
      name: "Ramesh Singh",
      image: "/farmer1.png",
    },
    description: "Sweet and juicy corn, perfect for grilling or boiling.",
    unit: "piece",
    harvestDate: "2024-03-15",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: true,
  },
  {
    id: "11",
    name: "Fresh Cauliflower",
    price: 60,
    image: "/cauliflower.png",
    category: "Vegetables",
    farmer: {
      name: "Sita Devi",
      image: "/farmer2.png",
    },
    description:
      "Fresh and crisp cauliflower, perfect for curries and stir-fries.",
    unit: "piece",
    harvestDate: "2024-03-14",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
  {
    id: "12",
    name: "Fresh Paneer",
    price: 200,
    image: "/paneer.png",
    category: "Dairy",
    farmer: {
      name: "Hari Chand",
      image: "/farmer3.png",
    },
    description: "Fresh and creamy paneer, perfect for curries and snacks.",
    unit: "kg",
    harvestDate: "2024-03-15",
    origin: "Pune, Maharashtra",
    isOrganic: true,
    isSeasonal: false,
  },
];

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  const handleSearch = useCallback((searchTerm: string) => {
    const filtered = dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  }, []);

  const handleFilter = useCallback((filters: FilterOptions) => {
    let filtered = [...dummyProducts];

    if (filters.category && filters.category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setProducts(filtered);
  }, []);

  const handleSort = useCallback((sortType: string) => {
    setProducts((currentProducts) => {
      const sorted = [...currentProducts];
      switch (sortType) {
        case "price_asc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price_desc":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          sorted.sort(
            (a, b) =>
              new Date(b.harvestDate).getTime() -
              new Date(a.harvestDate).getTime()
          );
          break;
        default:
          break;
      }
      return sorted;
    });
  }, []);

  const handleAddToCart = useCallback((productId: string) => {
    setCartItems((prev) => [...prev, productId]);
    // Show a notification or update cart count
    console.log("Added to cart:", productId);
  }, []);

  const handleAddToWishlist = useCallback((productId: string) => {
    setWishlistItems((prev) => [...prev, productId]);
    // Show a notification or update wishlist count
    console.log("Added to wishlist:", productId);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-[#315D0D]">
          Fresh from the Farm to Your Kitchen
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Handpicked organic produce delivered straight to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <ProductFilters
            onSearch={handleSearch}
            onFilter={handleFilter}
            onSort={handleSort}
          />
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <p className="text-center text-[#315D0D]"> & Many more to come! </p>
      </div>
    </div>
  );
};

export default ProductsPage;
