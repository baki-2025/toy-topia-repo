import React from "react";

const MyOrders = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">My Orders</h2>
        <p className="text-gray-600">
          You can view all your recent toy purchases here soon!
        </p>
      </div>
    </div>
  );
};

export default MyOrders;
