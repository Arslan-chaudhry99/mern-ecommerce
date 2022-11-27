const express = require("express");
const Post = require("../model/post");
require("../DB/db");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let Data = require("../model/post");

const DIR = "./public/img";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.route("/add").post(upload.array("images", 12), (req, res) => {
  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }
  const {
    ProductName,
    CardSlot,
    InternalMemory,
    Technology,
    G2Bands,
    G3Bands,
    G4Bands,
    NetworkSpeed,
    AnnouncedDate,
    Status,
    Dimensions,
    Weight,
    Sim,
    OthersBody,
    DisplaySize,
    DisplayType,
    DisplayResolution,
    DisplayProtection,
    OS,
    Chipset,
    CPU,
    GPU,
    PrimaryCamera,
    SecondaryCamera,
    CameraFeatures,
    CameraVideo,
    CameraOthers,
    LoudSpeaker,
    jackSound,
    CommsWlan,
    CommsBluetooth,
    CommsGPS,
    CommsNFC,
    CommsRadio,
    CommsUsb,
    Sensors,
    BatteryType,
    BatteryOthers,
    Description,
    RupeePrice,
    DollarPrice,
    DarazLink,
    AmazonLink,
    PticeoyeLink,
    images,
    YoutubeLink,
  } = req.body;

  const newPostData = {
    ProductName,
    CardSlot,
    InternalMemory,
    Technology,
    G2Bands,
    G3Bands,
    G4Bands,
    NetworkSpeed,
    AnnouncedDate,
    Status,
    Dimensions,
    Weight,
    Sim,
    OthersBody,
    DisplaySize,
    DisplayType,
    DisplayResolution,
    DisplayProtection,
    OS,
    Chipset,
    CPU,
    GPU,
    PrimaryCamera,
    SecondaryCamera,
    CameraFeatures,
    CameraVideo,
    CameraOthers,
    LoudSpeaker,
    jackSound,
    CommsWlan,
    CommsBluetooth,
    CommsGPS,
    CommsNFC,
    CommsRadio,
    CommsUsb,
    Sensors,
    BatteryType,
    BatteryOthers,
    Description,
    RupeePrice,
    DollarPrice,
    DarazLink,
    AmazonLink,
    PticeoyeLink,
    images,
    YoutubeLink,
  };
  const newPost = new Data(newPostData);
  newPost
    .save()
    .then(() => res.json("post Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
