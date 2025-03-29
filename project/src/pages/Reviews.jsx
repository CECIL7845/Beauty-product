import { useState } from "react";
import { FiStar } from "react-icons/fi";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      productName: "Luxury Face Serum",
      rating: 5,
      author: "Sarah J.",
      date: "2024-03-10",
      content: "Amazing product! My skin feels so much better after just a week of use.",
    },
    {
      id: 2,
      productName: "Hydrating Moisturizer",
      rating: 4,
      author: "Mike R.",
      date: "2024-03-09",
      content: "Great moisturizer, keeps my skin hydrated all day long.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    productName: "",
    rating: 5,
    content: "",
  });

  // Function to handle new review submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      ...newReview,
      author: "Anonymous",
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([review, ...reviews]);
    setNewReview({ productName: "", rating: 5, content: "" });
  };

  // Function to update rating in the review list
  const updateRating = (id, newRating) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, rating: newRating } : review
      )
    );
  };

  // Star Rating Component (Now Supports Editing)
  const StarRating = ({ rating, setRating }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={star <= rating ? "text-yellow-400" : "text-gray-300"}
          >
            <FiStar className="h-6 w-6 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Reviews</h1>

      {/* Review Form */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={newReview.productName}
              onChange={(e) =>
                setNewReview({ ...newReview, productName: e.target.value })
              }
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <StarRating
              rating={newReview.rating}
              setRating={(rating) =>
                setNewReview({ ...newReview, rating })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Review
            </label>
            <textarea
              id="content"
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
              className="input h-32"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.productName}
                </h3>
                <p className="text-sm text-gray-500">
                  By {review.author} on {review.date}
                </p>
              </div>
              {/* Pass the update function for rating change */}
              <StarRating
                rating={review.rating}
                setRating={(rating) => updateRating(review.id, rating)}
              />
            </div>
            <p className="mt-4 text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
