import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // for eye icons

const Register = () => {
  const { auth, createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  // 🔐 Password validation function
  const validatePassword = (password) => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return false;
    }
    return true;
  };

  // 🧍 Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) return;

    try {
      const userCredential = await createUser(email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🧩 Google Login
  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Registered with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full pr-10"
              placeholder="Enter password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider text-black">OR</div>

        <button onClick={handleGoogleRegister} className="btn btn-secondary w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


