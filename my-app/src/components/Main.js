import React from "react";
import SignupBt from "./SignupBt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/Mainpage.css";
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
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <Carousel responsive={responsive} className="container" >
        {arr.map(() => {
          return (
            <>
              <div class="product productSliderMain container">
                <div class="product-img">
                  <i class="fa fa-heart-o"></i>
                  <span className="CartTagLine">new</span>
                  <img src="./img/product07.png" alt="" />
                </div>
                <div className="text-info reviewsForCard">
                  <span className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <a className="review-link">(10)</a>
                  </span>
                </div>
                <div class="product-body">
                  <h3 class="product-name">
                    <a>Nokia S10</a>
                  </h3>
                  <h4 class="product-price">
                    $980.00{" "}
                    <del class="product-old-price" style={{ color: "#dc3545" }}>
                      $990.00
                    </del>
                  </h4>

                  <button class="add-to-cart-btn">
                    <i class="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>

      <SignupBt />
    </>
  );
};

export default Main;
