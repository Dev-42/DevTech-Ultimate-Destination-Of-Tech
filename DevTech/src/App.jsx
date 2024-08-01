import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
