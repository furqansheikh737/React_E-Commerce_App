import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl bg-black text-white py-2 px-6 w-full max-w-xs">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam cumque voluptatum labore sed necessitatibus, molestiae modi, dolore recusandae fuga dicta praesentium sint accusantium nesciunt corporis, mollitia ipsam facilis officia.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
