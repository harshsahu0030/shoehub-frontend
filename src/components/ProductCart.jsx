import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosExpand } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import Test02 from "../assets/puma02.avif";

import { useEffect, useState } from "react";

const ProductCart = ({ url }) => {
  //state
  const [inWishlist, setInWishlist] = useState(false);

  const rating = 3;

  // function
  const handleAddWishlist = () => {
    setInWishlist(true);
  };

  //useEffect
  useEffect(() => {});

  return (
    <div className="product_cart_container">
      <div className="top">
        <img src={url ? url : Test02} alt="img" />
        <div className="left">
          <span className="discount">24%</span>
        </div>
        <div className="right">
          <span className="expand">
            <IoIosExpand />
          </span>
          <span className="wishlist" onClick={handleAddWishlist}>
            {inWishlist ? <FaHeart /> : <FaRegHeart />}
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="heading">
          <h5>NIKE</h5>
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
        </div>
        <div className="stock">IN STOCK</div>
        <div className="star_rating">
          <div>
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  key={index}
                  className={index <= rating ? "active" : "inactive"}
                />
              );
            })}
          </div>

          <span>10</span>
        </div>

        <div className="price">
          <span>$29.00</span>
          <span>$25.00</span>
        </div>

        <button>Add to Card</button>
      </div>
    </div>
  );
};

export default ProductCart;
