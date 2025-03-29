// export default Cart;
import { FiTrash2 } from 'react-icons/fi';

function Cart({ cart, removeFromCart, updateQuantity }) {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-3 border-b">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Remove from Cart Button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                <FiTrash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
