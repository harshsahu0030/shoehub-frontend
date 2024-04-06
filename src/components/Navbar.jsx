import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import Logo from "../assets/logo.png";
import { IoChevronDownSharp } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { useRef, useState } from "react";
import { navbar } from "../data/navbar";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiMenuUnfoldLine } from "react-icons/ri";
import SliderMenu from "./SliderMenu";

const Navbar = () => {
  const navigate = useNavigate();

  //state
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({
    name: "Select a Location",
    code: "",
  });

  //ref
  const locationRef = useRef();

  //function
  const handleVisibleLocation = (text) => {
    if (text === "visible") {
      locationRef.current.style.opacity = 1;
      locationRef.current.style.visibility = "visible";
    } else {
      locationRef.current.style.opacity = 0;
      locationRef.current.style.visibility = "hidden";
    }
  };

  const handleLocation = (name, code) => {
    setLocation({
      name,
      code,
    });
    handleVisibleLocation();
  };

  return (
    <div className="navbar_container">
      <div className="wrapper">
        <div className="left">
          <div className="slider_menu">
            <RiMenuUnfoldLine />
            <SliderMenu />
          </div>
          <img src={Logo} alt="LOGO" onClick={() => navigate("/")} />
        </div>
        <div className="center">
          <div
            className="navbar_location"
            onClick={() => handleVisibleLocation("visible")}
          >
            <div>
              <span>Your Location</span>
              <span>{location.name}</span>
            </div>
            <IoChevronDownSharp />
          </div>

          <div className="forward_box_container" ref={locationRef}>
            <div className="wrapper">
              <div className="top">
                <IoCloseSharp onClick={handleVisibleLocation} />
                <h3>Choose your location</h3>
                <p>
                  Enter your address and we will specify the offer for your
                  area.
                </p>
              </div>

              <hr />
              <div className="bottom">
                {navbar ? (
                  <>
                    <ul>
                      <li
                        onClick={() => handleLocation("Select a Location", "")}
                      >
                        Select your area (Clear All)
                      </li>
                      {Object.entries(navbar.states).map((item) => (
                        <li
                          key={item[0]}
                          onClick={() => handleLocation(item[1], item[0])}
                        >
                          {item[1]}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>No Location Found</p>
                )}
              </div>
            </div>
          </div>
          <div className="navbar_search">
            <input
              type="search"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <RiSearch2Line />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <AiOutlineUser
                onClick={() => navigate("/my-account/dashboard")}
              />
            </li>
            <li>$0.00</li>
            <li>
              <SlHandbag />
              <span>5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
