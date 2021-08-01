var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  const options = {
    page: {
      title: "Express",
      css: "index.css",
    },
  }
  res.render("index", options)
})

module.exports = router
