import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  // get email passed from login page
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get("email");
    if (userEmail) setEmail(userEmail);
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();
    toast.success("Redirecting to Gmail...");
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-base-200 p-6 rounded-xl mt-10 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <button className="btn btn-primary w-full">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
