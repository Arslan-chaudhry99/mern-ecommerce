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
    ProductName: ProductName.toString().replaceAll(/\s/g, "-").toLowerCase(),
    Search: ProductName.toString().replaceAll(/\s/g, "").toLowerCase(),
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
    DarazLink: DarazLink.toLowerCase(),
    AmazonLink: AmazonLink.toLowerCase(),
    PticeoyeLink: PticeoyeLink.toLowerCase(),
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
    .then(() => res.status(201).json({ message: "Product Add Successfully" }))
    .catch((err) => res.status(203).json({ message: "Try again." }));
});

router.get("/getProducts", async (req, res) => {
  const QueryName = req.query.QueryName ? req.query.QueryName : "";
  const QueryValues = req.query.QueryValues ? req.query.QueryValues : "";
  const page = req.query.page;
  const size = 10;
  const skip = page * size;
  if (QueryName !== "" && QueryValues !== "") {
    console.log("1*");
    const total = await Post.find({ [QueryName]: QueryValues });
    if (total.length === 0) {
      console.log("1,2*" + QueryName + QueryValues);
      return res.status(200).json({ data: total, total: 0 });
    } else {
      console.log("1,2 3*");
      const data = await Post.find({ [QueryName]: QueryValues })
        .skip(skip)
        .limit(size);

      return res
        .status(200)
        .json({ data: data, total: Math.ceil(total.length / size) });
    }
  } else {
    const Totals = await Post.countDocuments();
    const data = await Post.aggregate([{ $sample: { size: Totals } }])
      .skip(skip)
      .limit(size);
    console.log(Totals);
    const total = await Post.find();
    return res
      .status(200)
      .json({ data: data, total: Math.ceil(total.length / size) });
  }
});
// get all a desired product data
router.get("/getMainData", async (req, res) => {
  const find_data = req.query.name;
  console.log(find_data);
  const data = await Post.find({ ProductName: find_data });
  return res.status(200).json({ data: data });
});
router.get("/findProducts", async (req, res) => {
  const find_data = req.query.name.toLowerCase();
  if (find_data === "") {
    return res.status(200).json({ data: [] });
  } else {
    const reg = new RegExp(find_data.replaceAll(/\s/g, ""));
    // console.log(reg);
    const preson = await Post.find({
      ProductName: { $regex: reg, $options: "gi" },
    });
    return res.status(200).json({ data: preson });
  }
});
module.exports = router;
