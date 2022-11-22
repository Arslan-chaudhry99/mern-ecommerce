import React from "react";
import "./css/Aditor.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-form-hook";
const Editor = () => {
  // image preview

  // setting form data
  const [FormInfo, setFormInfo] = useState({
    ProductName: "",
    Cardslot: "",
    Internalmemory: "",
    Technology: "",
    G2Bands: "",
    G3Bands: "",
    G4Bands: "",
    Networkspeed: "",
    Announceddate: "",
    Status: "",
    Dimensions: "",
    Weight: "",
    Sim: "",
    Othersbody: "",
    displaysize: "",
    displaytype: "",
    displayresolution: "",
    displayprotection: "",
    OS: "",
    chipset: "",
    CPU: "",
    GPU: "",
    Primarycamera: "",
    Secondarycamera: "",
    camerafeatures: "",
    cameravideo: "",
    cameraothers: "",
    Loudspeaker: "",
    jacksound: "",
    commswlan: "",
    commsbluetooth: "",
    commsGPS: "",
    commsNFC: "",
    commsradio: "",
    commsusb: "",
    Sensors: "",
    batterytype: "",
    batteryothers: "",
    description: "",
    rupeePrice: "",
    dollarPrice: "",
    darazLink: "",
    amazonLink: "",
    pticeoyeLink: "",
    images: [],
  });
  console.log(FormInfo);
  // setting post data
  let names;
  const setInputsData = (e) => {
    names = e.target.name;
    setFormInfo({
      ...FormInfo,
      [names]: e.target.value,
    });
  };
  // post request
  const submiteDataNow = async (e) => {
    e.preventDefault();
    const res = await axios.post("/Create_Post", FormInfo);
    console.log(res);
  };

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
              <form method="post" enctype="multipart/form-data">
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
                                  name="ProductName"
                                  placeholder="Enter Product Name"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Card slot</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Cardslot"
                                  placeholder="Enter Card slot"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Internal</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Internalmemory"
                                  placeholder="Enter Internal Memory"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Technology</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Technology"
                                  placeholder="Enter Technology"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">2G Bands</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="G2Bands"
                                  placeholder="Enter 2G Bands"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">3G Bands</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="G3Bands"
                                  placeholder="Enter 3G Bands"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">4G Bands</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="G4Bands"
                                  placeholder="Enter 4G Bands"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Network Speed</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Networkspeed"
                                  placeholder="Enter Network Speed"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Announced Date</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Announceddate"
                                  placeholder="Enter Announced Date"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Status</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Status"
                                  placeholder="Enter current Status available or not"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Dimensions</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Dimensions"
                                  placeholder="Enter Dimensions"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Weight</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Weight"
                                  placeholder="Enter Weight"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Sim</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Sim"
                                  placeholder="Enter Sim dual or not"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Others BODY</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Othersbody"
                                  placeholder="Enter Others BODY"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">DISPLAY size</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="displaysize"
                                  placeholder="Enter DISPLAY size"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">DISPLAY Type</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="displaytype"
                                  placeholder="Enter DISPLAY Type"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">DISPLAY Resolution</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="displayresolution"
                                  placeholder="Enter DISPLAY Resolution"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">DISPLAY Protection</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="displayprotection"
                                  placeholder="Enter DISPLAY Protection"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">OS</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="OS"
                                  placeholder="Enter OS"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Chipset</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="chipset"
                                  placeholder="Enter Chipset"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">CPU</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="CPU"
                                  placeholder="Enter CPU"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">GPU</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="GPU"
                                  placeholder="Enter GPU"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Primary CAMERA</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Primarycamera"
                                  placeholder="Enter Primary CAMERA"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Secondary CAMERA</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Secondarycamera"
                                  placeholder="Enter Secondary CAMERA"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">CAMERA Features</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="camerafeatures"
                                  placeholder="Enter CAMERA Features"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">CAMERA Video</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="cameravideo"
                                  placeholder="Enter CAMERA Video"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">CAMERA Others</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="cameraothers"
                                  placeholder="Enter CAMERA Others"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Loudspeaker</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Loudspeaker"
                                  placeholder="Enter CAMERA Others"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">3.5mm jack sound</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="jacksound"
                                  placeholder="Enter 3.5mm jack sound yes or no"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS WLAN</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commswlan"
                                  placeholder="Enter COMMS WLAN"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS Bluetooth</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commsbluetooth"
                                  placeholder="Enter COMMS Bluetooth"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS GPS</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commsGPS"
                                  placeholder="Enter COMMS GPS"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS NFC</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commsNFC"
                                  placeholder="Enter COMMS NFC yes or no"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS Radio</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commsradio"
                                  placeholder="Enter COMMS Radio yes or no"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">COMMS USB</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="commsusb"
                                  placeholder="Enter COMMS USB"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Sensors</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="Sensors"
                                  placeholder="Enter Sensors"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">BATTERY type</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="batterytype"
                                  placeholder="Enter BATTERY type"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">BATTERY Others</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="batteryothers"
                                  placeholder="Enter BATTERY Others"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">
                                  Enter Product Description
                                </h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="description"
                                  placeholder="Enter Product Description"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">
                                  Enter Product Price (rupee)
                                </h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="rupeePrice"
                                  placeholder="Enter Product Price in rupee"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Enter Product Price($)</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="dollarPrice"
                                  placeholder="Enter Product Price in $(dollar)"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Daraz Link</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="darazLink"
                                  placeholder="Daraz Link"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Amazon Link</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="amazonLink"
                                  placeholder="Amazon Link"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Pticeoye Link</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  className="input inputSettingFields"
                                  name="pticeoyeLink"
                                  placeholder="Pticeoye Link"
                                  onChange={setInputsData}
                                  required
                                />
                              </div>
                            </div>
                            <hr />

                            {/*  */}
                            <div className="row inputSitePro">
                              <div className="col-sm-3">
                                <h6 className="mb-0">Images</h6>
                              </div>
                              <div className="col-sm-9 text-secondary">
                                <input
                                  type="file"
                                  name="images"
                                  placeholder="Enter Product Name"
                                  accept="image/*"
                                  onChange={(e) => {
                                    FormInfo.images = e.target.files;
                                  }}
                                  multiple
                                />
                              </div>
                            </div>
                            <hr />
                            <div className="row inputSitePro">
                              <div className="col-sm-9 text-secondary ">
                                <div className="imagesTagesFor"></div>
                              </div>
                            </div>
                            <hr />
                            <button
                              className="ButtonsForEditr"
                              onClick={submiteDataNow}
                              type="submit"
                            >
                              Submite Data
                            </button>
                          </form>
                          <div
                            className="ButtonsForEditr"
                            style={{
                              marginTop: "10px",
                              width: "90px",
                              cursor: "pointer",
                            }}
                          >
                            Preview
                            <i class="fa fa-eye " aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
