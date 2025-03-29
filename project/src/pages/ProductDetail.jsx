import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

function ProductDetail() {
  const { id } = useParams();
  
  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: "Luxury Face Serum",
    brand: "BeautyGlow",
    price: 89.99,
    rating: 4.8,
    reviews: 128,
    description: "A powerful anti-aging serum that helps reduce fine lines and wrinkles while improving skin texture and radiance.",
    ingredients: "Water, Glycerin, Niacinamide, Hyaluronic Acid, Peptides, Natural Extracts",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture",
      "Enhances radiance",
      "Hydrates deeply",
      "Suitable for all skin types"
    ]
  };

  const [selectedTab, setSelectedTab] = useState('description');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
          
          <div className="flex items-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-gray-900 mt-4">
            ${product.price}
          </p>

          <button className="btn-primary flex items-center justify-center w-full mt-6">
            <FiShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>

          {/* Tabs */}
          <div className="mt-12">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setSelectedTab('description')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === 'description'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setSelectedTab('ingredients')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === 'ingredients'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setSelectedTab('benefits')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === 'benefits'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Benefits
                </button>
              </nav>
            </div>

            <div className="mt-8">
              {selectedTab === 'description' && (
                <p className="text-gray-600">{product.description}</p>
              )}
              {selectedTab === 'ingredients' && (
                <p className="text-gray-600">{product.ingredients}</p>
              )}
              {selectedTab === 'benefits' && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;