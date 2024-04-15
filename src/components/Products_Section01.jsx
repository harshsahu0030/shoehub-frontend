import { useRef, useState } from "react";
import { categories, colorPallets, products_discount } from "../data/category";
import ProductCart from "./ProductCart";
import { IoCloseSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Products_Section01 = () => {
  //states
  const [gender, setGender] = useState("all");
  const [colorSlice, setColorSlice] = useState(false);
  const [color, setColor] = useState();
  const [discount, setDiscount] = useState("");

  //ref
  const showRef = useRef();

  //function
  const handleVisible = (text) => {
    console.log(text);
    if (text === "visible") {
      showRef.current.style.opacity = 1;
      showRef.current.style.visibility = "visible";
    } else {
      showRef.current.style.opacity = 0;
      showRef.current.style.visibility = "hidden";
    }
  };

  return (
    <div className="products_section01_container">
      <div className="left">
        <h3>FILTERS</h3>
        <hr />
        <div>
          <ul>
            {categories &&
              categories.map((item, i) => (
                <li key={i}>
                  <div className="input_radio_container">
                    <input
                      type="radio"
                      name="gender"
                      onChange={() => setGender(item.gender)}
                      checked={gender === item.gender}
                    />
                    <label htmlFor="">{item.gender}</label>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <hr />

        <div>
          <h4>CATEGORIES</h4>
          <ul>
            {categories
              .find((item) => item.gender === gender)
              .types.slice(0, 10)
              .map((item, i) => (
                <li key={i}>
                  <div className="input_checkbox_container">
                    <input type="checkbox" value={item} />
                    <label htmlFor="">{item}</label>
                  </div>
                </li>
              ))}
          </ul>
          <span onClick={() => handleVisible("visible")}>+ More</span>

          <div className="show_box_container" ref={showRef}>
            <h4>
              Categories
              <IoCloseSharp onClick={handleVisible} />
            </h4>
            <hr />

            <ul className="items">
              {categories
                .find((item) => item.gender === gender)
                .types.map((item, i) => (
                  <li key={i}>
                    <div className="input_checkbox_container">
                      <input type="checkbox" value={item} name="category" />
                      <label htmlFor="">{item}</label>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <hr />

        <div>
          <h4>PRICE</h4>
          <ul>
            <li>
              <div className="input_checkbox_container">
                <input type="range" name="price" />
              </div>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <h4>COLORS</h4>
          <ul>
            {colorPallets
              .slice(0, !colorSlice ? 10 : colorPallets.length)
              .map((item, i) => (
                <li key={i}>
                  <div className="input_checkbox_container">
                    <input type="checkbox" value={item.name} name="color" />
                    <FaCircle
                      style={{
                        color: `rgb(${item.color.R},${item.color.G},${item.color.B})`,
                      }}
                    />
                    <label htmlFor="">{item.name}</label>
                  </div>
                </li>
              ))}
          </ul>
          <span onClick={() => setColorSlice(!colorSlice)}>
            {colorSlice ? "- Show Less" : "+ Show More"}
          </span>
        </div>
        <hr />

        <div>
          <h4>DISCOUNT</h4>
          <ul>
            {products_discount &&
              products_discount.map((item, i) => (
                <li key={i}>
                  <div className="input_checkbox_container">
                    <input
                      type="radio"
                      name="discount"
                      onChange={() => setDiscount(item.value)}
                      checked={discount === item.value}
                    />
                    <label htmlFor="">{item.name}</label>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};

export default Products_Section01;
