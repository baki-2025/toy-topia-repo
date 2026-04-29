import React from "react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 text-center">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Oops! Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
