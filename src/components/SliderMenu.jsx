import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.png";

const SliderMenu = () => {
  return (
    <div className="slider_menu_container">
      <div className="wrapper">
        <div className="top">
          <img src={Logo} alt="logo" />
        </div>
        <hr />
        <h5>Site Navigation</h5>
        <hr />
        <ul>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <h5>
          Copyright 2024 © Shoehub. All rights reserved. Powered by Harsh.
        </h5>
        <hr />
      </div>
      <div className="close_side">
        <IoMdClose />
      </div>
    </div>
  );
};

export default SliderMenu;
