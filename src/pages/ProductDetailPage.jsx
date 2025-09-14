import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (productId) {
      getProduct();
    }
  }, [productId]);

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;
  if (!product) return <p className="text-center py-8">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-64 object-contain" 
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;