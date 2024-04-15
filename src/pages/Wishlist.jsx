import Breadcrumbs from "../components/Breadcrumbs";
import WishlistProductCart from "../components/WishlistProductCart";

const Wishlist = () => {
  return (
    <div className="wishlist_container">
      <div className="wrapper">
        <Breadcrumbs />
        <h1>MY WISHLIST -- 10 ITEMS</h1>

        <div className="wishlist_products">
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
