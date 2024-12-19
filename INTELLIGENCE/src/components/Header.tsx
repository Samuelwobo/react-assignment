import { ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

import HeaderSection from './ui/HeaderSection'

const Header = () => {
  const { state } = useCart();
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
   <>
       <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold">🛍️</Link>
            <nav className="hidden md:flex space-x-6">
              <button className="hover:text-gray-600">Categories</button>
              <Link to="/deals" className="hover:text-gray-600">Deals</Link>
              <Link to="/whats-new" className="hover:text-gray-600">What's New</Link>
              <Link to="/delivery" className="hover:text-gray-600">Delivery</Link>
            </nav>
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-md"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1">
              <User size={20} />
              <span className="hidden md:inline">Account</span>
            </button>
            <Link to="/checkout" className="flex items-center space-x-1 relative">
              <ShoppingCart size={20} />
              <span className="hidden md:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
    <HeaderSection></HeaderSection>
   </>
  );
};

export default Header;