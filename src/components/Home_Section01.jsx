import Section_heading from "./Section_heading";
import Products_Slider from "./Products_Slider";
import ProductsView01 from "./ProductsView01";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { homeData } from "../data/home";
import React from "react";

const Home_Section01 = () => {
  return (
    <div
      className="home_section01_container
  "
    >
      <div className="left">
        <img src={homeData.banner.vertical[0]} alt="banner" />
        <img src={homeData.banner.vertical[1]} alt="banner" />

        <div className="features">
          {homeData.features &&
            homeData.features.map((item, i) => (
              <div key={i}>
                <span className="left">{React.createElement(item.icon)}</span>
                <span className="right">{item.desc}</span>
              </div>
            ))}
        </div>

        <div className="trending_products">
          <h4>TRENDING PRODUCTS</h4>
          <Link to={"#"}>
            View All <IoIosArrowRoundForward />
          </Link>
          <ProductsView01 />
          <ProductsView01 />
          <ProductsView01 />
          <ProductsView01 />
          <ProductsView01 />
        </div>
      </div>

      <div className="right">
        <Section_heading
          heading={"BEST SELLERS"}
          highlighted={""}
          description={"Do not miss the current offers until the end of April."}
          url={"#"}
        />
        <Products_Slider />

        <img
          className="long_banner"
          src={homeData.banner.horizontal[0]}
          alt="banner"
        />

        <Section_heading
          heading={"HOT PRODUCT FOR"}
          highlighted={"THIS WEEK"}
          description={
            "Dont miss this opportunity at a special discount just for this week."
          }
          url={"#"}
        />

        <Products_Slider />

        <div className="split_banners">
          <img src={homeData.banner.small[0]} alt="banner" />
          <img src={homeData.banner.small[1]} alt="banner" />
        </div>

        <Section_heading
          heading={"NEW PRODUCTS"}
          highlighted={""}
          description={"New products with updated stocks."}
          url={"#"}
        />

        <Products_Slider />

        <div className="split_banners">
          <img src={homeData.banner.small[2]} alt="banner" />
          <img src={homeData.banner.small[3]} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Home_Section01;
