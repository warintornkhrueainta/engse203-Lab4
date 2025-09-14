import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cart/cartSlice';

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Your Cart is Empty</h2>
        <p className="text-gray-600">Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button 
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Clear Cart
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {cartItems.map(item => (
          <div key={item.id} className="border-b last:border-b-0 p-4 flex items-center">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-16 h-16 object-contain mr-4" 
            />
            <div className="flex-grow">
              <h3 className="font-semibold line-clamp-1">{item.title}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
              >
                -
              </button>
              <span className="w-10 text-center">{item.quantity}</span>
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>
            <div className="ml-4">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button 
              onClick={() => handleRemoveItem(item.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;