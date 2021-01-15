"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  const news_url = `https://mimmofranco.herokuapp.com/https://raw.githubusercontent.com/emergenzeHack/covid19italia_data/master/issuesjson.json`
  const news_response = await fetch(news_url)
  const news_data = news_response.json()
  const callbackHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  callback(null, {
    statusCode: 200,
    headers: callbackHeaders,
    body: JSON.stringify(news_data),
  })
}
