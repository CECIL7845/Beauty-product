// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiSearch, FiShoppingCart } from 'react-icons/fi';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <span className="text-2xl font-bold text-primary-600">BeautyReviews</span>
//             </Link>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Home
//               </Link>
//               <Link to="/products" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Products
//               </Link>
//               <Link to="/reviews" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Reviews
//               </Link>
//               <Link to="/about" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
//                 About
//               </Link>
//               <Link to="/contact" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <button className="p-2 rounded-full text-gray-600 hover:text-primary-600">
//               <FiSearch className="h-5 w-5" />
//             </button>
//             <button className="ml-4 p-2 rounded-full text-gray-600 hover:text-primary-600">
//               <FiShoppingCart className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <svg
//                 className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-600">
//             Home
//           </Link>
//           <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-600">
//             Products
//           </Link>
//           <Link to="/reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-600">
//             Reviews
//           </Link>
//           <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-600">
//             About
//           </Link>
//           <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-600">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600">
            BeautyReviews
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-6">
            <Link to="/" className="text-gray-900 hover:text-primary-600">Home</Link>
            <Link to="/products" className="text-gray-900 hover:text-primary-600">Products</Link>
            <Link to="/reviews" className="text-gray-900 hover:text-primary-600">Reviews</Link>
            <Link to="/about" className="text-gray-900 hover:text-primary-600">About</Link>
            <Link to="/contact" className="text-gray-900 hover:text-primary-600">Contact</Link>
          </div>

          {/* Search Bar */}
          <form className="relative hidden sm:flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary-400"
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-600 hover:text-primary-600">
              <FiSearch className="h-5 w-5" />
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden ml-4">
            <span className="sr-only">Open Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-gray-900 hover:text-primary-600">Home</Link>
            <Link to="/products" className="block text-gray-900 hover:text-primary-600">Products</Link>
            <Link to="/reviews" className="block text-gray-900 hover:text-primary-600">Reviews</Link>
            <Link to="/about" className="block text-gray-900 hover:text-primary-600">About</Link>
            <Link to="/contact" className="block text-gray-900 hover:text-primary-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
