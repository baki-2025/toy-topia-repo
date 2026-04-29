

import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login, googleLogin, loading, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
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

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="text-sm text-right">
            <Link
              to={`/forgot-password?email=${email}`}
              className="text-pink-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="divider text-black">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-primary w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4 text-sm text-black">
          New user?{" "}
          <Link to="/register" className="text-pink-500 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

