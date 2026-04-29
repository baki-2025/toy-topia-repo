import React from "react";
import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="text-xl font-bold">ToyTopia</h3>
        <p className="text-sm text-gray-300">Local toys, big smiles.</p>
      </div>
      <div>
        <h4 className="font-semibold">Links</h4>
        <ul className="text-sm text-gray-300 mt-2">
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Follow Us</h4>
        <div className="flex gap-3 mt-2">
          <a href="#" aria-label="facebook" className="text-gray-300">Facebook</a>
          <a href="#" aria-label="twitter" className="text-gray-300">Twitter</a>
          <a href="#" aria-label="instagram" className="text-gray-300">Instagram</a>
        </div>
      </div>
    </div>
    <div className="text-center bg-gray-200 mt-6 text-sm text-gray-900">© {new Date().getFullYear()} ToyTopia. All rights reserved.</div>
  </footer>
);

export default Footer;
