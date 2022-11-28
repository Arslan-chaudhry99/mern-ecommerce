import React from "react";

const Store = () => {
  return (
    <>
      
      <div class="section">
        <div class="container">
          <div class="row">
            <div id="aside" class="col-md-3">
              <div class="aside">
                <h3 class="aside-title">Price</h3>
                <div class="price-filter">
                  <div id="price-slider"></div>
                  <div class="input-number price-min">
                    <input id="price-min" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div class="input-number price-max">
                    <input id="price-max" type="number" />
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
                  </div>
                </div>
              </div>

              <div class="aside">
                <h3 class="aside-title">Brand</h3>
                <div class="checkbox-filter">
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-1" />
                    <label for="brand-1">
                      <span></span>
                      SAMSUNG
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      LG
                      <small>(125)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      SONY
                      <small>(755)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-4" />
                    <label for="brand-4">
                      <span></span>
                      SAMSUNG
                      <small>(578)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-5" />
                    <label for="brand-5">
                      <span></span>
                      LG
                      <small>(125)</small>
                    </label>
                  </div>
                  <div class="input-checkbox">
                    <input type="checkbox" id="brand-6" />
                    <label for="brand-6">
                      <span></span>
                      SONY
                      <small>(755)</small>
                    </label>
                  </div>
                </div>
              </div>

              <div class="aside"></div>
            </div>

            <div id="store" class="col-md-9">
              <div class="store-filter clearfix">
                <div class="store-sort">
                  <label>
                    <span style={{ marginRight: "15px" }}> Show:</span>

                    <select class="input-select">
                      <option value="0">10</option>
                      <option value="1">20</option>
                      <option value="1">30</option>
                    </select>
                  </label>
                </div>
              </div>

              <div class="product productSliderMain container">
                <div class="product-img">
                  <i class="fa fa-heart-o"></i>
                  <span className="CartTagLine">new</span>
                  <img src="./img/product04.png" alt="" />
                </div>
                <div class="product-body">
                  <h3 class="product-name">
                    <a>product name goes here</a>
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

              <div class="store-filter clearfix">
                <ul class="store-pagination">
                  <li class="active">1</li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
