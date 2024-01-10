import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <img
        src="https://source.unsplash.com/800x600/?notfound"
        alt="404 Illustration"
        className="w-64 h-64 mb-8 rounded-full shadow-lg"
      />
      <div className="text-4xl font-bold mb-4">Oops! Page not found</div>
      <p className="text-lg mb-6">
        It seems like you've stumbled upon a page that doesn't exist.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100 transition-all duration-300"
        >
          Explore Home
        </Link>
        <Link
          to="/contact"
          className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
