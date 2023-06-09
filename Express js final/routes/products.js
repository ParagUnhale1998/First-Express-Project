const express = require("express");
const router = express.Router();


router.get("/products", (req, res) => {
    res.render("products", {
      title: "products Page",
    });
  });
  
  
module.exports = router;