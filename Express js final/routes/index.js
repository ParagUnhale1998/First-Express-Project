const express = require("express");
const router = express.Router();
const apikeymiddleware = require('../middlewares/apiKey')

// router.use(apikeymiddleware);  for all the routs use password apikey

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "about Page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/views/about.ejs"));
});

router.get("/api/products",apikeymiddleware, (req, res) => {
// router.get("/api/products", (req, res) => {
res.json([
    {
        id : 1,
        name:'crome',
    },
    {
        id : 2,
        name:'firefox',
    }
])  
});

  
module.exports = router;
