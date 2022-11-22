const mongoose = require("mongoose");
const Post = new mongoose.Schema({
  ProductName: {
    type: String,
    require: true,
  },
  images: {
    type: String,
    require: true,
  },
  Cardslot: {
    type: String,
    require: true,
  },
  Internalmemory: {
    type: String,
    require: true,
  },
  Technology: {
    type: String,
    require: true,
  },
  G2Bands: {
    type: String,
    require: true,
  },
  G3Bands: {
    type: String,
    require: true,
  },
  G4Bands: {
    type: String,
    require: true,
  },
  Networkspeed: {
    type: String,
    require: true,
  },
  Announceddate: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
  Dimensions: {
    type: String,
    require: true,
  },
  Weight: {
    type: String,
    require: true,
  },
  Sim: {
    type: String,
    require: true,
  },
  Othersbody: {
    type: String,
    require: true,
  },
  displaysize: {
    type: String,
    require: true,
  },
  displaytype: {
    type: String,
    require: true,
  },
  displayresolution: {
    type: String,
    require: true,
  },
  displayprotection: {
    type: String,
    require: true,
  },
  OS: {
    type: String,
    require: true,
  },
  chipset: {
    type: String,
    require: true,
  },
  CPU: {
    type: String,
    require: true,
  },
  GPU: {
    type: String,
    require: true,
  },
  Primarycamera: {
    type: String,
    require: true,
  },
  Secondarycamera: {
    type: String,
    require: true,
  },
  camerafeatures: {
    type: String,
    require: true,
  },
  cameravideo: {
    type: String,
    require: true,
  },
  cameraothers: {
    type: String,
    require: true,
  },
  Loudspeaker: {
    type: String,
    require: true,
  },
  jacksound: {
    type: String,
    require: true,
  },
  commswlan: {
    type: String,
    require: true,
  },
  commsbluetooth: {
    type: String,
    require: true,
  },
  commsGPS: {
    type: String,
    require: true,
  },
  commsNFC: {
    type: String,
    require: true,
  },
  commsradio: {
    type: String,
    require: true,
  },
  commsusb: {
    type: String,
    require: true,
  },
  Sensors: {
    type: String,
    require: true,
  },
  batterytype: {
    type: String,
    require: true,
  },
  batteryothers: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  Productprice: {
    type: String,
    require: true,
  },
  rupeePrice: {
    type: String,
    require: true,
  },
  dollarPrice: {
    type: String,
    require: true,
  },
  darazLink: {
    type: String,
    require: true,
  },
  amazonLink: {
    type: String,
    require: true,
  },
  pticeoyeLink: {
    type: String,
    require: true,
  },
});

const createPost = new mongoose.model("Post", Post);
module.exports = createPost;
