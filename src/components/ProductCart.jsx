import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosExpand } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import propTypes from "prop-types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCart = ({ product }) => {
  const navigate = useNavigate();

  //state
  const [inWishlist, setInWishlist] = useState(false);

  console.log(product);

  // function
  const handleAddWishlist = () => {
    setInWishlist(true);
  };

  //useEffect
  useEffect(() => {});

  return (
    <div className="product_cart_container">
      <div className="top">
        <img src={product.images[0].url} alt="img" />
        <div className="left">
          <span className="discount">{product.discount}%</span>
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
          <h5>{product.brand}</h5>
          <h4
            onClick={() => {
              navigate(`/products/${product._id}`);
            }}
          >
            {product.title.length > 40
              ? `${product.title.slice(0, 37)}...`
              : product.title}
          </h4>
        </div>

        <div className="star_rating">
          <div>
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  key={index}
                  className={index <= product.ratings ? "active" : "inactive"}
                />
              );
            })}
          </div>

          <span>{product.numOfReviews}</span>
        </div>

        <div className="price">
          <span>₹ {product.mrp} </span>
          <span>₹ {product.price} </span>
        </div>

        <button
          onClick={() => {
            navigate(`/products/${product._id}`);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  product: propTypes.object,
};

export default ProductCart;
