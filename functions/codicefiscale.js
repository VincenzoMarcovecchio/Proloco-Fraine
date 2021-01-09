"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  console.log(event)

  const name = event.queryStringParameters.name
  const surname = event.queryStringParameters.surname
  const gender = event.queryStringParameters.gender
  const day = event.queryStringParameters.day
  const month = event.queryStringParameters.month
  const year = event.queryStringParameters.year
  const city = event.queryStringParameters.city
  const province = event.queryStringParameters.province

  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    name,
    surname,
    gender,
    day,
    month,
    year,
    city,
    province,
  })
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }
  const news_url = "https://apis.woptima.com/cf"
  const news_response = await fetch(news_url, requestOptions)
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
