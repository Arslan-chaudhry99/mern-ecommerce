import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./css/Product.css";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-2">
              <div id="product-main-img">
                <div className="product-preview">
                  <Carousel responsive={responsive}>
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                    <img src="./img/product01.png" alt="" />
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-md-pull-5"></div>

            <div className="col-md-5">
              <div className="product-details">
                <h2 className="product-name">product name goes here</h2>
                <div>
                  <div className="product-rating">
                    <i className="fa fa-star" style={{ color: "red" }}></i>
                    <i className="fa fa-star" style={{ color: "red" }}></i>
                    <i className="fa fa-star" style={{ color: "red" }}></i>
                    <i className="fa fa-star" style={{ color: "red" }}></i>
                    <i className="fa fa-star-o" style={{ color: "red" }}></i>
                  </div>
                  <a className="review-link">10 Review</a>
                </div>
                <div>
                  <h3 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h3>
                  <span className="product-available">In Stock</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="add-to-cart">
                  <div className="qty-label">
                    Qty
                    <div className="input-number">
                      <input type="number" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                  </div>
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>

                <ul className="product-btns">
                  <li>
                    <a>
                      <i className="fa fa-heart-o"></i> add to wishlist
                    </a>
                  </li>
                </ul>

                <ul className="product-links">
                  <li>Share:</li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12">
              <div id="product-tab">
                <ul className="tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#tab1">
                      Description
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Details
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab3">
                      Reviews (3)
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="tab2" className="tab-pane fade in">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="detailsSections">
                          <h1 className="brandProduct">Oppo F21 Pro</h1>
                          <div className="brandProductSpect">
                            Specifications
                          </div>
                          <div className="ProductPricing">
                            Price in pakistan: 90000/-
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i className="fa fa-wifi ProductCoverDataright"></i>
                              </div>
                              <span className="ProductCoverDataright">
                                NETWORK
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row" className="ProductCoverData">
                                    Technology
                                  </th>
                                  <td className="ProductCoverDataright">
                                    GSM / HSPA / LTE
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">2G Bands</th>
                                  <td className="ProductCoverDataright">
                                    GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">3G Bands</th>
                                  <td className="ProductCoverDataright">
                                    HSDPA 850 / 900 / 2100
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">4G Bands</th>
                                  <td className="ProductCoverDataright">
                                    1, 3, 5, 8, 38, 40, 41
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Speed</th>
                                  <td className="ProductCoverDataright">
                                    HSPA 42.2/5.76 Mbps, LTE-A
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i className="fa fa-rocket ProductCoverDataright"></i>
                              </div>
                              <span className="ProductCoverDataright">
                                LAUNCH
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row" className="ProductCoverData">
                                    Announced
                                  </th>
                                  <td className="ProductCoverDataright">
                                    2022, April 12
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Status</th>
                                  <td className="ProductCoverDataright">
                                    Available
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-mobile ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                BODY
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row" className="ProductCoverData">
                                    Dimensions
                                  </th>
                                  <td className="ProductCoverDataright">
                                    159.9 x 73.2 x 7.5 mm (6.30 x 2.88 x 0.30
                                    in)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Weight</th>
                                  <td className="ProductCoverDataright">
                                    175 g (6.17 oz)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Sim</th>
                                  <td className="ProductCoverDataright">
                                    Dual SIM (Nano-SIM, dual stand-by)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Others</th>
                                  <td className="ProductCoverDataright">
                                    IPX4 water resistant RGB ring light around
                                    the camera (notifications, charging
                                    progress)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-desktop ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                DISPLAY
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row" className="ProductCoverData">
                                    Type
                                  </th>
                                  <td className="ProductCoverDataright">
                                    AMOLED, 90Hz, 430 nits (typ), 600 nits
                                    (HBM), 800 nits (peak)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Size</th>
                                  <td className="ProductCoverDataright">
                                    6.43 inches, 99.8 cm2 (~85.3% screen-to-body
                                    ratio)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Resolution</th>
                                  <td className="ProductCoverDataright">
                                    1080 x 2400 pixels, 20:9 ratio (~409 ppi
                                    density)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Protection</th>
                                  <td className="ProductCoverDataright">
                                    Corning Gorilla Glass 5
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-microchip ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                PLATFORM
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row" className="ProductCoverData">
                                    OS
                                  </th>
                                  <td className="ProductCoverDataright">
                                    Android 11, ColorOS 12.1
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Chipset</th>
                                  <td className="ProductCoverDataright">
                                    Qualcomm SM6225 Snapdragon 680 4G (6 nm)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">CPU</th>
                                  <td className="ProductCoverDataright">
                                    Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9
                                    GHz Kryo 265 Silver)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">GPU</th>
                                  <td className="ProductCoverDataright">
                                    Adreno 610
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-hdd-o ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                MEMORY
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">Card slot</th>
                                  <td className="ProductCoverDataright">
                                    microSDXC
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Internal</th>
                                  <td className="ProductCoverDataright">
                                    128GB/8GB RAM
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-camera ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                CAMERA
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">Primary</th>
                                  <td className="ProductCoverDataright">
                                    64 MP, f/1.7, 26mm (wide), 1/2.0", 0.7µm,
                                    PDAF 2 MP, f/3.3, (microscope) 2 MP, f/2.4,
                                    (depth)
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Features</th>
                                  <td className="ProductCoverDataright">
                                    LED flash, HDR, panorama
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Video</th>
                                  <td className="ProductCoverDataright">
                                    1080p@30fps, gyro-EIS
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Secondary </th>
                                  <td className="ProductCoverDataright">
                                    32 MP, f/2.4, 24mm (wide), 1/2.74", 0.8µm
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Others </th>
                                  <td className="ProductCoverDataright">
                                    Panorama, HDR 1080p@30fps, gyro-EIS
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-music ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                SOUND
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">Loudspeaker</th>
                                  <td className="ProductCoverDataright">Yes</td>
                                </tr>
                                <tr>
                                  <th scope="row">3.5mm jack</th>
                                  <td className="ProductCoverDataright">Yes</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-wifi ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                COMMS
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">WLAN</th>
                                  <td className="ProductCoverDataright">
                                    Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi
                                    Direct, hotspot
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Bluetooth</th>
                                  <td className="ProductCoverDataright">
                                    5.1, A2DP, LE, aptX HD
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">GPS</th>
                                  <td className="ProductCoverDataright">
                                    Yes, with A-GPS, GLONASS, BDS, GALILEO, QZSS
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">NFC </th>
                                  <td className="ProductCoverDataright">No</td>
                                </tr>
                                <tr>
                                  <th scope="row">Radio </th>
                                  <td className="ProductCoverDataright">No</td>
                                </tr>
                                <tr>
                                  <th scope="row">USB </th>
                                  <td className="ProductCoverDataright">
                                    USB Type-C 2.0, USB On-The-GoUSB Type-C 2.0,
                                    USB On-The-Go
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-star-o ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                FEATURES
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">Sensors</th>
                                  <td className="ProductCoverDataright">
                                    Fingerprint (under display, optical),
                                    accelerometer, gyro, proximity, compass
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="ProductCoverData">
                            <div className="brandDetailsSection">
                              <div className="brandDetailsSectionlogo">
                                <i
                                  class="fa fa-battery-full ProductCoverDataright"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <span className="ProductCoverDataright">
                                BATTERY
                              </span>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <th scope="row">Type</th>
                                  <td className="ProductCoverDataright">
                                    Li-Po 4500 mAh, non-removable
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Others</th>
                                  <td className="ProductCoverDataright">
                                    Fast charging 33W, 100% in 60 min
                                    (advertised) Reverse charging
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tab3" className="tab-pane fade in">
                    <div className="row">
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg ">
                            <span>4.5</span>
                            <div className="rating-stars ">
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "red" }}
                              ></i>
                              <i
                                className="fa fa-star-o"
                                style={{ color: "red" }}
                              ></i>
                            </div>
                          </div>
                          <ul className="rating">
                            <li>
                              <div className="rating-stars">
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "80%" }}></div>
                              </div>
                              <span className="sum">3</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star-o"
                                  style={{ color: "red" }}
                                ></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "60%" }}></div>
                              </div>
                              <span className="sum">2</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star-o"
                                  style={{ color: "red" }}
                                ></i>
                                <i
                                  className="fa fa-star-o"
                                  style={{ color: "red" }}
                                ></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div></div>
                              </div>
                              <span className="sum">0</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div id="reviews">
                          <ul className="reviews">
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">John</h5>
                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                          </ul>
                          <ul className="reviews-pagination">
                            <li className="active">1</li>
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
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form">
                            <input
                              className="input"
                              type="text"
                              placeholder="Your Name"
                            />
                            <input
                              className="input"
                              type="email"
                              placeholder="Your Email"
                            />
                            <textarea
                              className="input"
                              placeholder="Your Review"
                            ></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                <input
                                  id="star5"
                                  name="rating"
                                  value="5"
                                  type="radio"
                                />
                                <label for="star5"></label>
                                <input
                                  id="star4"
                                  name="rating"
                                  value="4"
                                  type="radio"
                                />
                                <label for="star4"></label>
                                <input
                                  id="star3"
                                  name="rating"
                                  value="3"
                                  type="radio"
                                />
                                <label for="star3"></label>
                                <input
                                  id="star2"
                                  name="rating"
                                  value="2"
                                  type="radio"
                                />
                                <label for="star2"></label>
                                <input
                                  id="star1"
                                  name="rating"
                                  value="1"
                                  type="radio"
                                />
                                <label for="star1"></label>
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
