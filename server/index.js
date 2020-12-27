"use strict"

var express = require("express")
var debug = require("debug")("api")
var app = new express()

// express configs
require("./config/express")(app)

// start app
app.listen(8080, error => {
  if (!error) {
    debug(`📡  Running on port: ${8080}`)
  }
})
