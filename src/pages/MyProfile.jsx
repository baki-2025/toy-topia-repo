import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-200 shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-4">My Profile</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-pink-400"
        />
        <p className="mt-2 text-lg font-semibold">{user?.displayName}</p>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="New Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default MyProfile;

