import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Mini E-commerce</h1>
      <p className="text-lg text-gray-600 mb-8">Discover amazing products at great prices</p>
      <Link 
        to="/products" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default HomePage;