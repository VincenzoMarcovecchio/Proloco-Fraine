"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  const news_url = `https://newsapi.org/v2/top-headlines?country=it&apiKey=0121e101985943d88d6b3a5ac0817273`
  const news_response = await fetch(news_url)
  const news_data = await news_response.json()
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
