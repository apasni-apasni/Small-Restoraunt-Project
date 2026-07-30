import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-20 border-t-4 border-red-600 shadow-inner">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-3">

              <img
                src="/logo.png"
                alt="Bakery Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-red-600 shadow"
              />

              <div>
                <h2 className="text-2xl font-bold text-red-700">
                  Bakery 🇬🇪
                </h2>

                <p className="text-sm text-gray-500">
                  ქართული გემო ყოველდღე
                </p>
              </div>

            </div>

            <p className="text-sm text-gray-600">
              ყოველდღე ახალგამომცხვარი ქართული პური,
              ტრადიციული კერძები და ტკბილეული სიყვარულით.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              მენიუ
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                className="hover:text-red-600 transition"
              >
                მთავარი
              </Link>

              <Link
                to="/contact"
                className="hover:text-red-600 transition"
              >
                კონტაქტი
              </Link>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              კონტაქტი
            </h3>

            <p>📍 ბათუმი, საქართველო</p>
            <p>📞 +995 555 12 34 56</p>
            <p>✉️ bakery@gmail.com</p>

          </div>

        </div>


        <hr className="my-6 border-red-200" />


        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bakery 🇬🇪
          ყველა უფლება დაცულია.
        </div>

      </div>
    </footer>
  );
}