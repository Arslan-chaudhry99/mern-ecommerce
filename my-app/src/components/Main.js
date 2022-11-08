import React from "react";
import SignupBt from "./SignupBt";
const Main = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop01.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Laptop
                    <br />
                    Collection
                  </h3>
                  <a className="cta-btn">
                    Shop now <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">

        <div class="container">

          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h3 class="title">Top Products</h3>

              </div>
            </div>


            <div class="row">
              <div class="clearfix visible-sm visible-xs"></div>

              <div class="col-md-3 col-xs-3">
                <div class="product">
                  <div class="product-img">
                    <img src="./img/product09.png" alt="" />
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name">
                      <a >product name goes here</a>
                    </h3>
                    <h4 class="product-price">
                      $980.00 <del class="product-old-price">$990.00</del>
                    </h4>


                    <button class="add-to-cart-btn">
                      <i class="fa fa-shopping-cart"></i> add to cart
                    </button>

                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <SignupBt />

    </>
  );
};

export default Main;
