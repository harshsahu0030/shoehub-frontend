import Test01 from "../assets/nike01.png";

const WishlistProductCart = () => {
  return (
    <div className="wishlist_product_cart_container">
      <div className="top">
        <img src={Test01} alt="img" />
      </div>
      <div className="center">
        <div className="heading">
          <h5>NIKE</h5>
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
        </div>
        <div className="price">
          <span>$29.00</span>
          <span>$25.00</span>
        </div>
      </div>
      <div className="bottom">
        <button>REMOVE FROM CART</button>
        <button>ADD to CART</button>
      </div>
    </div>
  );
};

export default WishlistProductCart;
