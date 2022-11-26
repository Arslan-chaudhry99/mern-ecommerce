import React from "react";
import "./css/Aditor.css";
import { useState } from "react";
import axios from "axios";

const Editor = () => {
  const [PostData, setPostData] = useState({
    Product_Name: "",
    Card_Slot: "",
    Internal_Memory: "",
    Technology: "",
    G2Bands: "",
    G3Bands: "",
    G4Bands: "",
    Network_Speed: "",
    Announced_Date: "",
    Status: "",
    Dimensions: "",
    Weight: "",
    Sim: "",
    Others_Body: "",
    Display_Size: "",
    Display_Type: "",
    Display_Resolution: "",
    Display_Protection: "",
    OS: "",
    Chipset: "",
    CPU: "",
    GPU: "",
    Primary_Camera: "",
    Secondary_Camera: "",
    Camera_Features: "",
    Camera_Video: "",
    Camera_Others: "",
    Loud_Speaker: "",
    jack_Sound: "",
    Comms_Wlan: "",
    Comms_Bluetooth: "",
    Comms_GPS: "",
    Comms_NFC: "",
    Comms_Radio: "",
    Comms_Usb: "",
    Sensors: "",
    Battery_Type: "",
    Battery_Others: "",
    Description: "",
    Rupee_Price: "",
    Dollar_Price: "",
    Daraz_Link: "",
    Amazon_Link: "",
    Pticeoye_Link: "",
    images: "",
    Youtube_Link: "",
  });
console.log(PostData);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    

    formData.append("Product_Name",PostData.Product_Name);
    formData.append("Card_Slot",PostData.Card_Slot);
    formData.append("Internal_Memory",PostData.Internal_Memory);
    formData.append("Technology",PostData.Technology);
    formData.append("G2Bands",PostData.G2Bands);
    formData.append("G3Bands",PostData.G3Bands);
    formData.append("G4Bands",PostData.G4Bands);
    formData.append("Network_Speed",PostData.Network_Speed);
    formData.append("Announced_Date",PostData.Announced_Date);
    formData.append("Status",PostData.Status);
    formData.append("Dimensions",PostData.Dimensions);
    formData.append("Weight",PostData.Weight);
    formData.append("Sim",PostData.Sim);
    formData.append("Others_Body",PostData.Others_Body);
    formData.append("Display_Size",PostData.Display_Size);
    formData.append("Display_Type",PostData.Display_Type);
    formData.append("Display_Resolution",PostData.Display_Resolution);
    formData.append("Display_Protection",PostData.Display_Protection);
    formData.append("OS",PostData.OS);
    formData.append("Chipset",PostData.Chipset);
    formData.append("CPU",PostData.CPU);
    formData.append("GPU",PostData.GPU);
    formData.append("Primary_Camera",PostData.Primary_Camera);
    formData.append("Secondary_Camera",PostData.Secondary_Camera);
    formData.append("Camera_Features",PostData.Camera_Features);
    formData.append("Camera_Video",PostData.Camera_Video);
    formData.append("Camera_Others",PostData.Camera_Others);
    formData.append("Loud_Speaker",PostData.Loud_Speaker);
    formData.append("jack_Sound",PostData.jack_Sound);
    formData.append("Comms_Wlan",PostData.Comms_Wlan);
    formData.append("Comms_Bluetooth",PostData.Comms_Bluetooth);
    formData.append("Comms_GPS",PostData.Comms_GPS);
    formData.append("Comms_NFC",PostData.Comms_NFC);
    formData.append("Comms_Radio",PostData.Comms_Radio);
   
    formData.append("Comms_Usb",PostData.Comms_Usb);
    formData.append("Sensors",PostData.Sensors);
    formData.append("Battery_Type",PostData.Battery_Type);
    formData.append("Battery_Others",PostData.Battery_Others);
    formData.append("Description",PostData.Description);
    formData.append("Rupee_Price",PostData.Rupee_Price);
    formData.append("Dollar_Price",PostData.Dollar_Price);
    formData.append("Daraz_Link",PostData.Dollar_Price);
    formData.append("Amazon_Link",PostData.Amazon_Link);
    formData.append("Pticeoye_Link",PostData.Pticeoye_Link);
    formData.append("Youtube_Link",PostData.Youtube_Link);
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
              name="Product_Name"
              value={PostData.Product_Name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Card Slot"
              className="inputsDatas"
              name="Card_Slot"
              value={PostData.Card_Slot}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Internal Memory"
              className="inputsDatas"
              name="Internal_Memory"
              value={PostData.Internal_Memory}
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
              placeholder="Network_Speed"
              className="inputsDatas"
              name="Network_Speed"
              value={PostData.Network_Speed}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Announced_Date"
              className="inputsDatas"
              name="Announced_Date"
              value={PostData.Announced_Date}
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
              placeholder="Others_Body"
              className="inputsDatas"
              name="Others_Body"
              value={PostData.Others_Body}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Display_Size"
              className="inputsDatas"
              name="Display_Size"
              value={PostData.Display_Size}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Display_Type"
              className="inputsDatas"
              name="Display_Type"
              value={PostData.Display_Type}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Display_Resolution"
              className="inputsDatas"
              name="Display_Resolution"
              value={PostData.Display_Resolution}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Display_Protection"
              className="inputsDatas"
              name="Display_Protection"
              value={PostData.Display_Protection}
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
              placeholder="Primary_Camera"
              className="inputsDatas"
              name="Primary_Camera"
              value={PostData.Primary_Camera}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Secondary_Camera"
              className="inputsDatas"
              name="Secondary_Camera"
              value={PostData.Secondary_Camera}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Camera_Features"
              className="inputsDatas"
              name="Camera_Features"
              value={PostData.Camera_Features}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Camera_Video"
              className="inputsDatas"
              name="Camera_Video"
              value={PostData.Camera_Video}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Camera_Others"
              className="inputsDatas"
              name="Camera_Others"
              value={PostData.Camera_Others}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Loud_Speaker"
              className="inputsDatas"
              name="Loud_Speaker"
              value={PostData.Loud_Speaker}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="jack_Sound"
              className="inputsDatas"
              name="jack_Sound"
              value={PostData.jack_Sound}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_Wlan"
              className="inputsDatas"
              name="Comms_Wlan"
              value={PostData.Comms_Wlan}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_Bluetooth"
              className="inputsDatas"
              name="Comms_Bluetooth"
              value={PostData.Comms_Bluetooth}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_GPS"
              className="inputsDatas"
              name="Comms_GPS"
              value={PostData.Comms_GPS}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_NFC"
              className="inputsDatas"
              name="Comms_NFC"
              value={PostData.Comms_NFC}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_Radio"
              className="inputsDatas"
              name="Comms_Radio"
              value={PostData.Comms_Radio}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Comms_Usb"
              className="inputsDatas"
              name="Comms_Usb"
              value={PostData.Comms_Usb}
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
              placeholder="Battery_Type"
              className="inputsDatas"
              name="Battery_Type"
              value={PostData.Battery_Type}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Battery_Others"
              className="inputsDatas"
              name="Battery_Others"
              value={PostData.Battery_Others}
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
              placeholder="Rupee_Price"
              className="inputsDatas"
              name="Rupee_Price"
              value={PostData.Rupee_Price}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Dollar_Price"
              className="inputsDatas"
              name="Dollar_Price"
              value={PostData.Dollar_Price}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Daraz_Link"
              className="inputsDatas"
              name="Daraz_Link"
              value={PostData.Daraz_Link}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Amazon_Link"
              className="inputsDatas"
              name="Amazon_Link"
              value={PostData.Amazon_Link}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Pticeoye_Link"
              className="inputsDatas"
              name="Pticeoye_Link"
              value={PostData.Pticeoye_Link}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Youtube_Link"
              className="inputsDatas"
              name="Youtube_Link"
              value={PostData.Youtube_Link}
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
