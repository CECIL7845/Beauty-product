import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import Cart from './Cart'; // Import the Cart component

function Products() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [cart, setCart] = useState([]); // Cart state

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const products = [
    { id: 1, name: "Luxury Face Serum", category: "skincare", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400", rating: 4.8, reviews: 128, price: 89.99 },
    { id: 2, name: "Hydrating Moisturizer", category: "skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", rating: 4.6, reviews: 95, price: 45.99 },
    { id: 3, name: "Natural Lip Balm", category: "makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.7, reviews: 156, price: 15.99 },
    { id: 4, name: "Volumizing Mascara", category: "makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", rating: 4.5, reviews: 234, price: 29.99 },
    { id: 5, name: "Repair Shampoo", category: "haircare", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400", rating: 4.4, reviews: 182, price: 24.99 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Add item to cart (if exists, increase quantity)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

      {/* Category Filter */}
      <div className="mb-8 flex space-x-4">
        {["all", "skincare", "makeup", "haircare"].map((category) => (
          <Link key={category} to={`/products?category=${category}`}>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </Link>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="card hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <FiStar className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">${product.price}</p>
                  <button 
                    className="p-2 rounded-full text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                    onClick={() => addToCart(product)}
                  >
                    <FiShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Component */}
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default Products;
