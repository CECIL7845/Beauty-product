// import { Link } from 'react-router-dom';
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">BeautyReviews</h3>
//             <p className="text-gray-400">Your trusted source for honest beauty product reviews and recommendations.</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
//               <li><Link to="/reviews" className="text-gray-400 hover:text-white">Reviews</Link></li>
//               <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
//               <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Categories Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Categories</h3>
//             <ul className="space-y-2">
//               <li><Link to="/products?category=skincare" className="text-gray-400 hover:text-white">Skincare</Link></li>
//               <li><Link to="/products?category=makeup" className="text-gray-400 hover:text-white">Makeup</Link></li>
//               <li><Link to="/products?category=haircare" className="text-gray-400 hover:text-white">Hair Care</Link></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FiFacebook className="h-6 w-6" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FiTwitter className="h-6 w-6" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FiInstagram className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-8 pt-8 border-t border-gray-800">
//           <p className="text-center text-gray-400">&copy; 2024 BeautyReviews. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BeautyReviews</h3>
            <p className="text-gray-400">Your trusted source for honest beauty product reviews and recommendations.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Reviews</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=skincare" className="text-gray-400 hover:text-white">Skincare</Link></li>
              <li><Link to="/products?category=makeup" className="text-gray-400 hover:text-white">Makeup</Link></li>
              <li><Link to="/products?category=haircare" className="text-gray-400 hover:text-white">Hair Care</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100080230965370&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/Terminator7845" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/cecil-odonkor-559650266/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">&copy; 2024 BeautyReviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
