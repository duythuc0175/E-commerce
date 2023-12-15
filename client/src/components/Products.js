import React, { useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10">
      {/* =================== Search Input Start ================= */}
      <div className="flex flex-col items-center mt-4">
        {/* Label for the search input */}
        <label htmlFor="search" className="text-xl font-bold mb-4 text-purple-800">
          Discover Amazing Products:
        </label>
          <input
            type="text"
            id="search"
            placeholder="🔍 Search for your favorite products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-4 w-96 rounded-md focus:outline-none focus:ring focus:border-purple-500 bg-gray-100"
          />

      </div>
      {/* =================== Search Input End =================== */}
      
      {/* =================== Products Start here ================= */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-4 text-lg text-red-500 font-bold">
          No matching products found.
        </p>
      ) : (
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
          {filteredProducts.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </div>
      )}
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
