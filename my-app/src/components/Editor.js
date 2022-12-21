import React from "react";
import "./css/Aditor.css";
import { useState } from "react";
import axios from "axios";
import Authnav from "./Authnav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Editor = () => {
  const [PostData, setPostData] = useState({
    ProductName: "",
    BrandName: "",
    CardSlot: "",
    InternalMemory: "",
    Technology: "",
    G2Bands: "",
    G3Bands: "",
    G4Bands: "",
    NetworkSpeed: "",
    AnnouncedDate: "",
    Status: "",
    Dimensions: "",
    Weight: "",
    Sim: "",
    OthersBody: "",
    DisplaySize: "",
    DisplayType: "",
    DisplayResolution: "",
    DisplayProtection: "",
    OS: "",
    Chipset: "",
    CPU: "",
    GPU: "",
    PrimaryCamera: "",
    SecondaryCamera: "",
    CameraFeatures: "",
    CameraVideo: "",
    CameraOthers: "",
    LoudSpeaker: "",
    jackSound: "",
    CommsWlan: "",
    CommsBluetooth: "",
    CommsGPS: "",
    CommsNFC: "",
    CommsRadio: "",
    CommsUsb: "",
    Sensors: "",
    BatteryType: "",
    BatteryOthers: "",
    Description: "",
    RupeePrice: "",
    DollarPrice: "",
    DarazLink: "",
    AmazonLink: "",
    PticeoyeLink: "",
    images: "",
    YoutubeLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    const formData = new FormData();

    formData.append("ProductName", PostData.ProductName);
    formData.append("BrandName", PostData.BrandName);
    formData.append("CardSlot", PostData.CardSlot);
    formData.append("InternalMemory", PostData.InternalMemory);
    formData.append("Technology", PostData.Technology);
    formData.append("G2Bands", PostData.G2Bands);
    formData.append("G3Bands", PostData.G3Bands);
    formData.append("G4Bands", PostData.G4Bands);
    formData.append("NetworkSpeed", PostData.NetworkSpeed);
    formData.append("AnnouncedDate", PostData.AnnouncedDate);
    formData.append("Status", PostData.Status);
    formData.append("Dimensions", PostData.Dimensions);
    formData.append("Weight", PostData.Weight);
    formData.append("Sim", PostData.Sim);
    formData.append("OthersBody", PostData.OthersBody);
    formData.append("DisplaySize", PostData.DisplaySize);
    formData.append("DisplayType", PostData.DisplayType);
    formData.append("DisplayResolution", PostData.DisplayResolution);
    formData.append("DisplayProtection", PostData.DisplayProtection);
    formData.append("OS", PostData.OS);
    formData.append("Chipset", PostData.Chipset);
    formData.append("CPU", PostData.CPU);
    formData.append("GPU", PostData.GPU);
    formData.append("PrimaryCamera", PostData.PrimaryCamera);
    formData.append("SecondaryCamera", PostData.SecondaryCamera);
    formData.append("CameraFeatures", PostData.CameraFeatures);
    formData.append("CameraVideo", PostData.CameraVideo);
    formData.append("CameraOthers", PostData.CameraOthers);
    formData.append("LoudSpeaker", PostData.LoudSpeaker);
    formData.append("jackSound", PostData.jackSound);
    formData.append("CommsWlan", PostData.CommsWlan);
    formData.append("CommsBluetooth", PostData.CommsBluetooth);
    formData.append("CommsGPS", PostData.CommsGPS);
    formData.append("CommsNFC", PostData.CommsNFC);
    formData.append("CommsRadio", PostData.CommsRadio);
    formData.append("CommsUsb", PostData.CommsUsb);
    formData.append("Sensors", PostData.Sensors);
    formData.append("BatteryType", PostData.BatteryType);
    formData.append("BatteryOthers", PostData.BatteryOthers);
    formData.append("Description", PostData.Description);
    formData.append("RupeePrice", PostData.RupeePrice);
    formData.append("DollarPrice", PostData.DollarPrice);
    formData.append("DarazLink", PostData.DarazLink);
    formData.append("AmazonLink", PostData.AmazonLink);
    formData.append("PticeoyeLink", PostData.PticeoyeLink);
    formData.append("YoutubeLink", PostData.YoutubeLink);
    formData.append("RAMS", PostData.RAMS);
    formData.append("camera", PostData.camera);
    formData.append("displaysize", PostData.displaysize);
    formData.append("network", PostData.network);
    formData.append("pricing", PostData.pricing);

    for (let i = 0; i < PostData.images.length; i++) {
      formData.append("images", PostData.images[i]);
    }

    axios
      .post("/createPost", formData)
      .then((res) => {
        console.log(res);
        return toast.update(id, {
          render: res.data.message,
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
      })
      .catch((err) => {
        return toast.update(id, {
          render: "Refresh and try again",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
      });
  };

  const handleChange = (e) => {
    setPostData({ ...PostData, [e.target.name]: e.target.value });
  };
  const actuallPhotos = [];
  for (const iterator of PostData.images) {
    actuallPhotos.push(iterator.name);
  }

  const handlePhoto = (e) => {
    setPostData({ ...PostData, images: e.target.files });
  };
  let name;
  let value;
  const handleChangeFilter = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPostData({ ...PostData, [name]: value });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
      />
      <Authnav />
      <div className="col-md-12" style={{ marginBottom: "100px" }}>
        <div id="product-tab">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <select
              name="BrandName"
              className="searchByNettwork"
              onChange={handleChangeFilter}
              style={{ marginRight: "10px" }}
            >
              <option value="">Search By Brands</option>
              <option value="samsung">Samsung</option>
              <option value="vivo">Vivo</option>
              <option value="oppo">Oppo</option>
              <option value="infinix">Infinix</option>
              <option value="realme">Realme</option>
              <option value="nokia">Nokia</option>
              <option value="apple">Apple</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="tecno">Tecno</option>
              <option value="huawei">Huawei</option>
              <option value="qmobile">Qmobile</option>
              <option value="itel">itel</option>
              <option value="onePlus">OnePlus</option>
              <option value="sony">Sony</option>
              <option value="honor">Honor</option>
              <option value="htC">HTC</option>
              <option value="meizu">Meizu</option>
              <option value="lg">LG</option>
              <option value="mobilink">Mobilink</option>
              <option value="lenovo">Lenovo</option>
              <option value="motorola">Motorola</option>
              <option value="blackBerry">BlackBerry</option>
              <option value="alcatel">Alcatel</option>
              <option value="oPhone">OPhone</option>
              <option value="calme">Calme</option>
              <option value="gRight">GRight</option>
              <option value="gfive">GFive</option>
              <option value="club">Club</option>
              <option value="rivo">Rivo</option>
              <option value="microsoft">Microsoft</option>
              <option value="voice">Voice</option>
              <option value="haier">Haier</option>
            </select>
            <select
              name="network"
              className="searchByNettwork"
              onChange={handleChangeFilter}
              style={{ marginRight: "10px" }}
            >
              <option value="">Search By Network</option>
              <option value="5G">5G Mobile Prices</option>
              <option value="4G">4G Mobile Prices</option>
            </select>
            <select
              name="RAMS"
              className="searchByNettwork"
              onChange={handleChangeFilter}
              style={{ marginRight: "10px" }}
            >
              <option value="">Search By RAM</option>
              <option value="2GB">2GB RAM</option>
              <option value="3GB">3GB RAM</option>
              <option value="4GB">4GB RAM</option>
              <option value="6GB">6GB RAM</option>
              <option value="8GB">8GB RAM</option>
              <option value="12GB">12GB RAM</option>
            </select>
            <select
              name="pricing"
              className="searchByNettwork"
              onChange={handleChangeFilter}
              style={{ marginRight: "10px" }}
            >
              <option value="">Search By Prices</option>
              <option value="45000-to-above">Rs. 45000 & Above</option>
              <option value="35000-to-45001">Rs. 35000 to 45001</option>
              <option value="25000-to-35001">Rs. 25000 to 35001</option>
              <option value="15000-to-25000">Rs. 15000 to 25000</option>
              <option value="10000-to-15001">Rs. 10000 to 15001</option>
              <option value="5000-to-10001">Rs. 5000 to 10001</option>
              <option value="less-than-5000">less than 5000</option>
            </select>
            <select
              name="camera"
              id=""
              className="searchByNettwork"
              onChange={handleChangeFilter}
              style={{ marginRight: "10px" }}
            >
              <option>Search By CAM</option>
              <option value="13MGA">13 Megapixel</option>
              <option value="8MGA">8 Megapixel</option>
              <option value="5MGA">5 Megapixel</option>
              <option value="3MGA">3 Megapixel</option>
              <option value="2MGA"> 2 Megapixel</option>
              <option value="1MGA"> 1 Megapixel</option>
              <option value="VGA">VGA Camera</option>
              <option value="WOC">Without Camera</option>
            </select>
            <select
              name="displaysize"
              id=""
              className="searchByNettwork"
              onChange={handleChangeFilter}
            >
              <option value=""> Search By Screen</option>
              <option value="1.0-to-2.9">1.0 to 2.9 Inches</option>
              <option value="3.0-to-4.0">3.0 to 4.0 Inches</option>
              <option value="4.1-to-4.9">4.1 to 4.9 Inches</option>
              <option value="5.0-to-6.9">5.0 to 6.9 Inches</option>
              <option value="7.0-to-8.9">7.0 to 8.9 Inches</option>
            </select>

            <input
              type="text"
              placeholder="Product Name"
              className="inputsDatas"
              name="ProductName"
              value={PostData.ProductName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Card Slot"
              className="inputsDatas"
              name="CardSlot"
              value={PostData.CardSlot}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Internal Memory"
              className="inputsDatas"
              name="InternalMemory"
              value={PostData.InternalMemory}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Technology"
              className="inputsDatas"
              name="Technology"
              value={PostData.Technology}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="G2Bands"
              className="inputsDatas"
              name="G2Bands"
              value={PostData.G2Bands}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="G3Bands"
              className="inputsDatas"
              name="G3Bands"
              value={PostData.G3Bands}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="G4Bands"
              className="inputsDatas"
              name="G4Bands"
              value={PostData.G4Bands}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="NetworkSpeed"
              className="inputsDatas"
              name="NetworkSpeed"
              value={PostData.NetworkSpeed}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="AnnouncedDate"
              className="inputsDatas"
              name="AnnouncedDate"
              value={PostData.AnnouncedDate}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Status"
              className="inputsDatas"
              name="Status"
              value={PostData.Status}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Dimensions"
              className="inputsDatas"
              name="Dimensions"
              value={PostData.Dimensions}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Weight"
              className="inputsDatas"
              name="Weight"
              value={PostData.Weight}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Sim"
              className="inputsDatas"
              name="Sim"
              value={PostData.Sim}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="OthersBody"
              className="inputsDatas"
              name="OthersBody"
              value={PostData.OthersBody}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DisplaySize"
              className="inputsDatas"
              name="DisplaySize"
              value={PostData.DisplaySize}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DisplayType"
              className="inputsDatas"
              name="DisplayType"
              value={PostData.DisplayType}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DisplayResolution"
              className="inputsDatas"
              name="DisplayResolution"
              value={PostData.DisplayResolution}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DisplayProtection"
              className="inputsDatas"
              name="DisplayProtection"
              value={PostData.DisplayProtection}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="OS"
              className="inputsDatas"
              name="OS"
              value={PostData.OS}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Chipset"
              className="inputsDatas"
              name="Chipset"
              value={PostData.Chipset}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CPU"
              className="inputsDatas"
              name="CPU"
              value={PostData.CPU}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="GPU"
              className="inputsDatas"
              name="GPU"
              value={PostData.GPU}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="PrimaryCamera"
              className="inputsDatas"
              name="PrimaryCamera"
              value={PostData.PrimaryCamera}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="SecondaryCamera"
              className="inputsDatas"
              name="SecondaryCamera"
              value={PostData.SecondaryCamera}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CameraFeatures"
              className="inputsDatas"
              name="CameraFeatures"
              value={PostData.CameraFeatures}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CameraVideo"
              className="inputsDatas"
              name="CameraVideo"
              value={PostData.CameraVideo}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CameraOthers"
              className="inputsDatas"
              name="CameraOthers"
              value={PostData.CameraOthers}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="LoudSpeaker"
              className="inputsDatas"
              name="LoudSpeaker"
              value={PostData.LoudSpeaker}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="jackSound"
              className="inputsDatas"
              name="jackSound"
              value={PostData.jackSound}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsWlan"
              className="inputsDatas"
              name="CommsWlan"
              value={PostData.CommsWlan}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsBluetooth"
              className="inputsDatas"
              name="CommsBluetooth"
              value={PostData.CommsBluetooth}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsGPS"
              className="inputsDatas"
              name="CommsGPS"
              value={PostData.CommsGPS}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsNFC"
              className="inputsDatas"
              name="CommsNFC"
              value={PostData.CommsNFC}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsRadio"
              className="inputsDatas"
              name="CommsRadio"
              value={PostData.CommsRadio}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="CommsUsb"
              className="inputsDatas"
              name="CommsUsb"
              value={PostData.CommsUsb}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Sensors"
              className="inputsDatas"
              name="Sensors"
              value={PostData.Sensors}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="BatteryType"
              className="inputsDatas"
              name="BatteryType"
              value={PostData.BatteryType}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="BatteryOthers"
              className="inputsDatas"
              name="BatteryOthers"
              value={PostData.BatteryOthers}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Description"
              className="inputsDatas"
              name="Description"
              value={PostData.Description}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="RupeePrice"
              className="inputsDatas"
              name="RupeePrice"
              value={PostData.RupeePrice}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DollarPrice"
              className="inputsDatas"
              name="DollarPrice"
              value={PostData.DollarPrice}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="DarazLink"
              className="inputsDatas"
              name="DarazLink"
              value={PostData.DarazLink}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="AmazonLink"
              className="inputsDatas"
              name="AmazonLink"
              value={PostData.AmazonLink}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="PticeoyeLink"
              className="inputsDatas"
              name="PticeoyeLink"
              value={PostData.PticeoyeLink}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="YoutubeLink"
              className="inputsDatas"
              name="YoutubeLink"
              value={PostData.YoutubeLink}
              onChange={handleChange}
            />
            {/* there we will upload files soon inshallah */}

            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="images"
              onChange={handlePhoto}
              multiple
            />
            <div className="displayingItems">
              {actuallPhotos.map((data) => {
                return (
                  <>
                    <div className="actualItemsDetails">{data}</div>
                  </>
                );
              })}
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Editor;
