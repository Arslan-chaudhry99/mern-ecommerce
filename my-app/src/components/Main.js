import React from "react";
import SignupBt from "./SignupBt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/Mainpage.css";
import { useEffect } from "react";
import { getAllProductsData } from "../Action";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const Main = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productState = useSelector((state) => state.ProductsDatas);
  const dispatch = useDispatch();
console.log(productState);
  useEffect(() => {
    dispatch(getAllProductsData(""));
  }, []);

  return (
    <>
      <Carousel responsive={responsive} className="container">
        {productState.content.flat().map((values) => {
          return (
            <>
              <NavLink to={"/Product/" + values.ProductName}>
                <div class="product productSliderMain-I container">
                  <div class="product-img">
                    <i class="fa fa-heart-o"></i>
                    <span className="CartTagLine">new</span>
                    <div className="mainSliderData">
                      <img src={values.images[0]} alt="img" />
                    </div>
                  </div>
                  {/* <div className="text-info reviewsForCard">
                  <span className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <a className="review-link">(10)</a>
                  </span>
                </div> */}
                  <div class="product-body">
                    <h3 class="product-name">
                      <a>{values.ProductName.replaceAll(/\-/g, " ")}</a>
                    </h3>
                    <h4 class="product-price">
                      ${values.DollarPrice}.00
                      {/* <del class="product-old-price" style={{ color: "#dc3545" }}>
                      $990.00
                    </del> */}
                    </h4>

                    {/* <button class="add-to-cart-btn">
                    <i class="fa fa-shopping-cart"></i> add to cart
                  </button> */}
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </Carousel>

      <SignupBt />
    </>
  );
};

export default Main;
