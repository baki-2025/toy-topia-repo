import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import { User, Mail, Camera, Save, Edit3, Image as ImageIcon } from "lucide-react";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center items-center p-6 py-12">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-white/50 relative">
        {/* Decorative Header Background */}
        <div className="h-32 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 w-full absolute top-0 left-0"></div>
        
        <div className="relative pt-16 px-8 pb-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full p-1 bg-white shadow-xl relative z-10">
                <img
                  src={photoURL || user?.photoURL || "https://i.ibb.co.com/mVMF71gZ/markus-spiske-OO89-95a-UC0-unsplash.jpg"}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800 drop-shadow-sm">
              {user?.displayName || "Update Your Name"}
            </h2>
            <div className="flex items-center text-gray-500 mt-2 bg-gray-100/50 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200/50 shadow-sm">
              <Mail className="w-4 h-4 mr-2 text-indigo-400" />
              {user?.email}
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-pink-500" />
                Full Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all shadow-sm"
                />
                <Edit3 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <ImageIcon className="w-4 h-4 text-purple-500" />
                Profile Photo URL
              </label>
              <div className="relative group">
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all shadow-sm"
                />
                <Camera className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

