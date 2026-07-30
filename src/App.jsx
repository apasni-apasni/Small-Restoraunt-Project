import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./pages/Order";

export default function App() {
  return (
    <>
      <Navbar />
      <nav>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}