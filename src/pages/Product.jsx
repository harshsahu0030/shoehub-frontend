import { FaStar } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { sizes } from "../data/category";
import Img01 from "../assets/nike01.png";
import Img02 from "../assets/nike02.avif";
import Img03 from "../assets/nike03.avif";
import Img04 from "../assets/nike04.avif";
import Img05 from "../assets/nike05.avif";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Product = () => {
  //state
  const [toggleButton, setToggleButton] = useState("description");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(0);
  const [size, setSize] = useState();

  //ref
  const addCommentRef = useRef();

  //function
  const handleVisibleAddComment = (text) => {
    setRating(0);
    setHover(0);
    setComment("");
    if (text === "visible") {
      addCommentRef.current.style.opacity = 1;
      addCommentRef.current.style.visibility = "visible";
    } else {
      addCommentRef.current.style.opacity = 0;
      addCommentRef.current.style.visibility = "hidden";
    }
  };

  const images = [
    {
      i: 1,
      url: Img01,
    },
    {
      i: 2,
      url: Img02,
    },
    {
      i: 3,
      url: Img03,
    },
    {
      i: 4,
      url: Img04,
    },
    {
      i: 5,
      url: Img05,
    },
  ];

  //function
  const hangleToggle = (text) => {
    setToggleButton(text);
  };

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const addCommentHandler = (e) => {
    e.preventDefault();
    console.log(rating, comment);

    setRating(0);
    setHover(0);
    setComment("");
    handleVisibleAddComment();
  };

  return (
    <div className="product_container">
      <div className="wrapper">
        {/* product section */}
        <div className="product_section">
          {/* slider */}
          <div className="left">
            <ImageSlider />
          </div>

          {/* product info */}
          <div className="right">
            <div className="top">
              <h4>NIKE</h4>
              <h1>Smashic Brand Logo Printed Casual Sneakers Shoes</h1>

              <div>
                <span>
                  <span>Gender: </span>
                  <span>Men</span>
                </span>
                |
                <span>
                  <span>
                    {[...Array(5)].map((_, index) => {
                      index += 1;
                      return (
                        <FaStar
                          key={index}
                          className={index <= 3 ? "active" : "inactive"}
                        />
                      );
                    })}
                  </span>
                  <span>1 Review</span>
                </span>{" "}
                |
                <span>
                  <span>Category:</span>
                  <span>Sports</span>
                </span>
              </div>
            </div>

            {/* price */}
            <div className="price">
              <div className="top">
                <span>₹2024</span>
                <span>₹2024</span>
              </div>
              <div className="bottom">inclusive of all taxes</div>
            </div>

            {/* colore */}
            <div className="colors">
              <h5>MORE COLORS</h5>

              <div>
                {images.map((item, index) => (
                  <img key={index} src={item.url} alt="image" />
                ))}
              </div>
            </div>

            {/* sizes */}
            <div className="sizes">
              <h5>SELECT SIZE (UK Size)</h5>

              <div>
                {sizes[0].sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={
                      parseInt(size) === parseInt(item) ? "active" : ""
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <hr />

            {/* buttons */}
            <div className="add_buttons">
              <button>
                <SlHandbag />
                ADD TO BAG
              </button>
              <button>
                <FaRegHeart />
                ADD TO WISHLIST
              </button>
            </div>
          </div>
        </div>

        {/* product section 02 */}
        <div className="info_section">
          <div className="top">
            <span
              className={toggleButton === "description" ? "active" : "unactive"}
              onClick={() => hangleToggle("description")}
            >
              DESCRIPTION
            </span>
            <span
              className={
                toggleButton === "specifications" ? "active" : "unactive"
              }
              onClick={() => hangleToggle("specifications")}
            >
              SPECIFICATIONS
            </span>
            <span
              className={toggleButton === "reviews" ? "active" : "unactive"}
              onClick={() => hangleToggle("reviews")}
            >
              REVIEWS
            </span>
          </div>

          <hr />

          <div className="bottom">
            {toggleButton === "description" && (
              <div className="description fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                neque, exercitationem rem, sed unde optio dolor possimus commodi
                consequuntur veniam sunt dolorem voluptates odit excepturi sequi
                similique hic fugit animi nobis error temporibus labore enim
                blanditiis. Ratione, quis nemo, at blanditiis repellat
                consequuntur deserunt ipsa asperiores officiis voluptatibus
                fugiat non qui autem cumque nihil magnam aspernatur. Iusto nam
                hic quisquam quibusdam libero quo asperiores fugiat, alias sint
                consequuntur veritatis placeat, nostrum adipisci aspernatur
                corrupti voluptate dolores odit mollitia laboriosam harum maxime
                ipsa. Neque, ducimus delectus? Exercitationem saepe consequuntur
                magnam. Aspernatur illo accusantium aliquam quam nobis officia,
                adipisci sed, rem blanditiis nihil consectetur odio at tempora
                doloremque voluptates totam minus. Sint incidunt quam atque,
                perferendis mollitia deserunt! Numquam, explicabo aperiam beatae
                doloremque eaque aliquam commodi qui quasi dolor architecto sunt
                provident sapiente molestias et possimus, reprehenderit impedit
                suscipit ipsa facere fuga iure officia! Qui dolor excepturi
                placeat expedita aspernatur vero obcaecati perferendis, eos a
                voluptates temporibus facere ea commodi doloremque nihil
                repellendus iste illo cupiditate autem ipsam. Eos molestias
                itaque praesentium odio, enim debitis ducimus atque similique
                quibusdam, alias sit nam explicabo quasi quae accusamus earum
                nulla fuga velit repellat qui neque aspernatur voluptas. Odio
                provident minima doloribus ipsam repellat deserunt.
              </div>
            )}

            {toggleButton === "specifications" && (
              <div className="specifications fade">
                <table>
                  <tbody>
                    <tr>
                      <td>Hello</td>
                      <td>Hello</td>
                    </tr>
                    <tr>
                      <td>Hello</td>
                      <td>Hello</td>
                    </tr>
                    <tr>
                      <td>Hello</td>
                      <td>Hello</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {toggleButton === "reviews" && (
              <div className="reviews fade">
                <div className="top">
                  <h4>
                    1 REVIEW FOR ALL NATURAL ITALIAN-STYLE CHICKEN MEATBALLS
                  </h4>
                  <button onClick={() => handleVisibleAddComment("visible")}>
                    Add Review
                  </button>

                  <div className="forward_box_container" ref={addCommentRef}>
                    <div className="wrapper">
                      <div className="top">
                        <IoCloseSharp onClick={handleVisibleAddComment} />
                        <h3>Add Review</h3>
                        <p>
                          Enter your reviews and It will help other to choose
                          better products.
                        </p>
                      </div>
                      <form className="bottom" onSubmit={addCommentHandler}>
                        <div className="stars">
                          {[...Array(5)].map((_, index) => {
                            index += 1;

                            return (
                              <FaStar
                                key={index}
                                className={
                                  index <= (hover || rating)
                                    ? "active"
                                    : "inactive"
                                }
                                onClick={() => handleClick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                              />
                            );
                          })}
                        </div>
                        <div className="input_single_container">
                          <label htmlFor="comment">Enter your comment *</label>
                          <textarea
                            type="text"
                            placeholder="Enter comment"
                            name="comment"
                            rows={5}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                        </div>
                        <button type="submit">ADD COMMENT</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="bottom"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
