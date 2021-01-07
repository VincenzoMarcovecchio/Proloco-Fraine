"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  const age = event.queryStringParameters.age
  const news_url = `https://openbilanci.it/armonizzati/bilanci/fraine-comune-ch/entrate/dettaglio.json?year=${age}&type=preventivo`
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
