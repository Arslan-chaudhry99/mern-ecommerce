import React from "react";
import "./css/Aditor.css";
import { useState } from "react";
import axios from "axios";

const Editor = () => {
  const [PostData, setPostData] = useState({
    ProductName: "",
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
  console.log(PostData);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ProductName", PostData.ProductName);
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
    formData.append("DarazLink", PostData.DollarPrice);
    formData.append("AmazonLink", PostData.AmazonLink);
    formData.append("PticeoyeLink", PostData.PticeoyeLink);
    formData.append("YoutubeLink", PostData.YoutubeLink);
    console.log(formData);
    for (let i = 0; i < PostData.images.length; i++) {
      formData.append("images", PostData.images[i]);
    }
    console.log(formData);
    axios
      .post("/add", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setPostData({ ...PostData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setPostData({ ...PostData, images: e.target.files });
  };

  return (
    <>
      <div className="col-md-12">
        <div id="product-tab">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Editor;
