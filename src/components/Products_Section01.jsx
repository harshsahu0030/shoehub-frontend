import { categories } from "../data/category";
import ProductCart from "./ProductCart";

const Products_Section01 = () => {
  return (
    categories && (
      <div className="products_section01_container">
        <div className="left">
          <h3>FILTERS</h3>
          <hr />
          <div>
            {categories.map((item, i) => (
              <div key={i} className="input_radio_container">
                <input type="radio" value={item.gender} />
                <label htmlFor="">{item.gender}</label>
              </div>
            ))}
          </div>

          <hr />
        </div>
        <div className="right">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
    )
  );
};

export default Products_Section01;
