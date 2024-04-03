import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MyAccount from "./pages/MyAccount";
import Product from "./pages/Product";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <Categories />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account/:pathname" element={<MyAccount />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
