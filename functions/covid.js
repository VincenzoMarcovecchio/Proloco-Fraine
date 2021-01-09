"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  const news_url = `https://cors-anywhere.herokuapp.com/https://covid19italiahelp.herokuapp.com/reports/Provincia/Chieti`
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
