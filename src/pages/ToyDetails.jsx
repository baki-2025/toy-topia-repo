


import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // ✅ Fetch toy info dynamically (replace with your actual data source)
    fetch(`/toysData.json`) // or your API endpoint
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((t) => t.id === parseInt(id));
        setToy(foundToy);
      });
  }, [id]);

  const handleTryNow = (e) => {
    e.preventDefault();
    toast.success("🎉 You have successfully tried this toy!");
    e.target.reset();
  };

  if (!toy) return <div className="text-center py-10">Loading toy details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={toy.image}
          alt={toy.name}
          className="w-64 h-64 object-cover rounded-xl shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{toy.name}</h2>
          <p className="text-gray-600 mb-2">{toy.description}</p>
          <p className="text-xl font-semibold text-indigo-600 mb-4">
            Price: ${toy.price}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {toy.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Rating:</span> ⭐ {toy.rating}
          </p>
        </div>
      </div>

      {/* ✅ Try Now Form */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold mb-4">Try Now</h3>
        <form onSubmit={handleTryNow} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Enter your name"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Try Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;
