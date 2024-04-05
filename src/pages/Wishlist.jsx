import WishlistProductCart from "../components/WishlistProductCart";

const Wishlist = () => {
  return (
    <div className="wishlist_container">
      <div className="wrapper">
        <h1>MY WISHLIST -- 10 ITEMS</h1>
        <div>
          <WishlistProductCart />
          <WishlistProductCart />
          <WishlistProductCart />
          <WishlistProductCart />
          <WishlistProductCart />
          <WishlistProductCart />
          <WishlistProductCart />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
