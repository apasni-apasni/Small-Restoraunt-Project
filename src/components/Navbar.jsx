import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Sweet Food Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-red-600 shadow-md group-hover:scale-110 group-hover:rotate-6 transition duration-300"
          />

          <div>
            <h1 className="text-2xl font-bold text-red-700 group-hover:text-red-800 transition">
              Sweet Food 
            </h1>

            <p className="text-sm text-gray-600">
              ქართული ტრადიციული გემო
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-red-600 hover:bg-red-100"
              }`
            }
          >
            🏠
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700"
              }`
            }
          >
            📞 კონტაქტი
          </NavLink>

          {/* Order Button */}
       <Link
  to="/order"
  className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
>
  🍽️ შეკვეთა
</Link>

        </div>
      </div>
    </nav>
  );
}