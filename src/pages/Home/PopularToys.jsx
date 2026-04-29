


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // ✅ Correct import

const PopularToys = () => {
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 6)))
      .catch((error) => console.error("Error loading toys:", error));
  }, []);

  return (
    <div className="py-10 px-6 bg-green-700">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">
        🎁 Popular Toys
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <div
            key={toy.toyId}
            className="card bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <figure>
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="h-56 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toy.toyName}</h2>
              <p className="text-sm">Price: <span className="font-semibold">${toy.price}</span></p>
              <p className="text-sm">Rating: ⭐ {toy.rating}</p>
              <p className="text-sm text-red">
                Available: {toy.availableQuantity} pcs
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => navigate(`/toy/${toy.toyId}`)}
                  className="btn btn-outline btn-primary mt-3"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToys;

