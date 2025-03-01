import React from "react";
import ProductsGrid from "@/components/ProductGrid";

const page = () => {
  return (
    <>
      <div className="text-center mt-16">
        <h1 className="text-3xl font-semibold text-[#315D0D]">
          Fresh from the Farm to Your Kitchen
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Handpicked organic produce delivered straight to you.
        </p>
      </div>

      <div>
        <ProductsGrid />
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-center text-[#315D0D]"> & Many more to come ! </p>
      </div>
    </>
  );
};

export default page;
