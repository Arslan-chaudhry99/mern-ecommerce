const mongoose = require("mongoose");
const PostData = new mongoose.Schema({
  ProductName: {
    type: String,
    require: true,
  },
  BrandName: {
    type: String,
    require: true,
  },
  CardSlot: {
    type: String,
    require: true,
  },
  InternalMemory: {
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
  NetworkSpeed: {
    type: String,
    require: true,
  },
  AnnouncedDate: {
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
  OthersBody: {
    type: String,
    require: true,
  },
  DisplaySize: {
    type: String,
    require: true,
  },
  DisplayType: {
    type: String,
    require: true,
  },
  DisplayResolution: {
    type: String,
    require: true,
  },
  DisplayProtection: {
    type: String,
    require: true,
  },
  OS: {
    type: String,
    require: true,
  },
  Chipset: {
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
  CardSlot: {
    type: String,
    require: true,
  },
  InternalMemory: {
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
  NetworkSpeed: {
    type: String,
    require: true,
  },
  AnnouncedDate: {
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
  OthersBody: {
    type: String,
    require: true,
  },
  DisplaySize: {
    type: String,
    require: true,
  },
  DisplayType: {
    type: String,
    require: true,
  },
  DisplayResolution: {
    type: String,
    require: true,
  },
  DisplayProtection: {
    type: String,
    require: true,
  },
  OS: {
    type: String,
    require: true,
  },
  Chipset: {
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
  PrimaryCamera: {
    type: String,
    require: true,
  },
  SecondaryCamera: {
    type: String,
    require: true,
  },
  CameraFeatures: {
    type: String,
    require: true,
  },
  CameraVideo: {
    type: String,
    require: true,
  },
  CameraOthers: {
    type: String,
    require: true,
  },
  LoudSpeaker: {
    type: String,
    require: true,
  },
  jackSound: {
    type: String,
    require: true,
  },
  CommsWlan: {
    type: String,
    require: true,
  },
  CommsBluetooth: {
    type: String,
    require: true,
  },
  CommsGPS: {
    type: String,
    require: true,
  },
  CommsNFC: {
    type: String,
    require: true,
  },
  CommsRadio: {
    type: String,
    require: true,
  },
  CommsUsb: {
    type: String,
    require: true,
  },
  Sensors: {
    type: String,
    require: true,
  },
  BatteryType: {
    type: String,
    require: true,
  },
  BatteryOthers: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  RupeePrice: {
    type: String,
    require: true,
  },
  DollarPrice: {
    type: String,
    require: true,
  },
  DarazLink: {
    type: String,
    require: true,
  },
  AmazonLink: {
    type: String,
    require: true,
  },
  PticeoyeLink: {
    type: String,
    require: true,
  },
  images: {
    type: Array,
    require: true,
  },
  YoutubeLink: {
    type: String,
    require: true,
  },
});

const Post = new mongoose.model("Post", PostData);
module.exports = Post;
