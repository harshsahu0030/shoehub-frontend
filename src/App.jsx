import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MyAccount from "./pages/MyAccount";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <section className="categories_section">
        <Categories />
      </section>
      <section className="routes_section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account/:pathname" element={<MyAccount />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
