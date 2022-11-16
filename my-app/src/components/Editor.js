import React from "react";
import "./css/Aditor.css";
import axios from "axios";
import { useEffect } from "react";
const Editor = () => {
  const data = { name: "Arslan", age: 90 };
  const submiteData = async () => {
    axios
      .get("./addProduct", data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    submiteData();
  }, []);

  return (
    <>
      <div className="col-md-12">
        <div id="product-tab">
          <ul className="tab-nav">
            <li className="active">
              <button
                data-toggle="tab"
                href="#tab1"
                className="ButtonsForEditr"
              >
                Create Post
              </button>
            </li>
            <li>
              <button
                data-toggle="tab"
                href="#tab2"
                className="ButtonsForEditr"
              >
                Profile
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div id="tab1" className="tab-pane fade in active">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <form method="post">
                          <div className="row inputSitePro">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Product Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                className="input inputSettingFields"
                                name="name"
                                placeholder="Enter Product Name"
                              />
                            </div>
                          </div>
                          <hr />
                          <div className="row inputSitePro">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Images</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="file"
                                name="images"
                                placeholder="Enter Product Name"
                                multiple
                              />
                            </div>
                          </div>
                          <hr />
                          <button className="ButtonsForEditr">
                            Submite Data
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab2" className="tab-pane fade in">
              <div className="row">
                <div className="col-md-12">
                  <p>pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
