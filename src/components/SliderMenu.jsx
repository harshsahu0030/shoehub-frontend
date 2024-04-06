import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.png";
import Location from "./Location";
import { categories } from "../data/category";
import { IoChevronDownSharp } from "react-icons/io5";
import propTypes from "prop-types";
import { useEffect, useRef } from "react";

const SliderMenu = ({ setToggleSideMenu, toggleSideMenu }) => {
  //useRef
  const slideMenuVisible = useRef();

  useEffect(() => {
    if (toggleSideMenu) {
      slideMenuVisible.current.style.visibility = "visible";
      slideMenuVisible.current.style.opacity = "1";
      slideMenuVisible.current.style.width = "100%";
    } else {
      slideMenuVisible.current.style.visibility = "hidden";
      slideMenuVisible.current.style.opacity = "0";
      slideMenuVisible.current.style.width = "0";
    }
  }, [toggleSideMenu]);

  return (
    <div className="slider_menu_container" ref={slideMenuVisible}>
      <div className="wrapper">
        <div className="top">
          <img src={Logo} alt="logo" />
        </div>
        <hr />

        <ul>
          <li>
            <Location />
          </li>

          <li>
            <h5>Site Navigation</h5>
          </li>
          <hr />

          {categories &&
            categories.map((item, i) => (
              <li key={i}>
                <span>
                  {item.gender} <IoChevronDownSharp />
                </span>
              </li>
            ))}

          <hr />
          <li>
            <h5>
              Copyright 2024 © Shoehub. All rights reserved. Powered by Harsh.
            </h5>
          </li>
        </ul>
      </div>
      <div className="close_side" onClick={(prev) => setToggleSideMenu(!prev)}>
        <IoMdClose />
      </div>
    </div>
  );
};

SliderMenu.propTypes = {
  toggleSideMenu: propTypes.bool,
  setToggleSideMenu: propTypes.func,
};

export default SliderMenu;
