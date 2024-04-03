import Test01 from "../assets/nike01.png";

const ProductsView01 = () => {
  return (
    <div className="products_view_container">
      <div className="left">
        <img src={Test01} alt="img" />
      </div>
      <div className="right">
        <div className="heading">
          <h5>NIKE</h5>
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
        </div>
        <div className="price">
          <span>$29.00</span>
          <span>$25.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsView01;
