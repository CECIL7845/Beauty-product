function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About BeautyReviews</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to BeautyReviews, your trusted source for honest and comprehensive beauty product reviews. 
            Our mission is to help you make informed decisions about your beauty purchases through detailed 
            analysis and authentic user experiences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe that everyone deserves access to reliable information about beauty products. 
            Our platform brings together expert opinions and real user experiences to provide you 
            with the most comprehensive product reviews in the beauty industry.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="mb-2">Unbiased, honest reviews from verified users</li>
            <li className="mb-2">Detailed analysis of product ingredients and benefits</li>
            <li className="mb-2">Regular updates on the latest beauty trends and innovations</li>
            <li className="mb-2">Community-driven ratings and recommendations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Process</h2>
          <p className="text-gray-600 mb-6">
            Each product featured on our platform undergoes thorough testing and evaluation. 
            We consider multiple factors including ingredients, effectiveness, value for money, 
            and user experience. Our reviews are updated regularly to reflect the latest 
            formulations and user feedback.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            We invite you to become part of our growing community of beauty enthusiasts. 
            Share your experiences, write reviews, and connect with others who share your 
            passion for beauty and skincare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;