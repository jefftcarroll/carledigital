var express = require("express")
var app = express()
var cors = require("cors")
var fs = require("fs")

var whitelist = [/http:\/\/dev.simplete.org:\d+/, /http:\/\/localhost:\d+/]
var corsOptions = {
  origin: function(origin, callback) {
    if (
      whitelist
        .map(host => new RegExp(host).test(origin))
        .find(v => v === true) === true
    ) {
      console.dir("ok")
      callback(null, true)
    } else {
      console.dir("nope")
      callback(new Error("Not allowed by CORS"))
    }
  }
}

app.use(cors(corsOptions))

app.get("/2020/plans.json", (req, res, next) => {
  res.json(fs.readFileSync("./plans.json").toString())
})

app.listen(3001, () => {
  console.log("Server running on port 3001")
})
