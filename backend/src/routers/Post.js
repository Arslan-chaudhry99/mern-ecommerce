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

router.route("/createPost").post(upload.array("images", 20), (req, res) => {
  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/img/" + req.files[i].filename);
  }

  const {
    ProductName,
    BrandName,
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
    YoutubeLink,
    RAMS,
    camera,
    displaysize,
    network,
    pricing,
  } = req.body;

  const newPostData = {
    ProductName: ProductName.toString().replaceAll(/\s/g, "-"),
    BrandName: BrandName.toLowerCase(),
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
    images: reqFiles,
    YoutubeLink,
    RAMS,
    camera,
    displaysize,
    network,
    pricing,
  };

  const newPost = new Data(newPostData);
  newPost
    .save()
    .then(() => res.json("post Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/getProducts", async (req, res) => {
  const QueryName = req.query.QueryName;
  const QueryValues = req.query.QueryValues;
  const page = req.query.page;
  const size = 3;
  const skip = (page - 1) * size;
  console.log(size, req.query.page, QueryName, QueryValues);
  if (QueryName !== "" && QueryValues !== "") {
    const total = await Post.find({ [QueryValues]: QueryName });
    console.log(total.length);
    if (total.length === 0) {
      console.log("product length is zoro");

      return res.status(200).json({ data: [], total: 0 });
    } else {
      const data = await Post.find({ [QueryValues]: { $in: QueryName } })
        .skip(skip)
        .limit(size);
      console.log(total.length);
      return res.status(200).json({ data: data, total: total.length });
    }
  } else {
    const data = await Post.find({}).skip(skip).limit(size);
    const total = await Post.find();
    return res.status(200).json({ data: data, total: total.length });
  }
});

module.exports = router;
