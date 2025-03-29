import { Link } from 'react-router-dom';
import { FiStar, FiTrendingUp, FiAward } from 'react-icons/fi';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Luxury Face Serum",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
      rating: 4.8,
      reviews: 128,
      price: 89.99
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
      rating: 4.6,
      reviews: 95,
      price: 45.99
    },
    {
      id: 3,
      name: "Natural Lip Balm",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      rating: 4.7,
      reviews: 156,
      price: 15.99
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Discover the Best in Beauty
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-primary-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Honest reviews, expert recommendations, and the latest trends in beauty and skincare.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/products"
                className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-primary-700"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="card hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-2">
                    <FiStar className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                <FiStar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Expert Reviews</h3>
              <p className="mt-2 text-gray-600">Detailed analysis from beauty experts you can trust.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                <FiTrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Latest Trends</h3>
              <p className="mt-2 text-gray-600">Stay updated with the newest beauty innovations.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                <FiAward className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Top Rated</h3>
              <p className="mt-2 text-gray-600">Discover products loved by our community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;