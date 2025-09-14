import React, { memo } from 'react';

const ProductCard = memo(({ product, onAddToCart }) => {
  const handleAddToCartClick = () => {
    onAddToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain p-4" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCartClick}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;