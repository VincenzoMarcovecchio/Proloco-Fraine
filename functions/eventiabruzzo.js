"use strict"

const fetch = require("node-fetch")

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }



  const news_url = `https://abruzzoturismo.it/it/views/ajax?_wrapper_format=drupal_ajax`
  return fetch(news_url, {
    headers: {
      "content-type": "application/json",
      authority: "abruzzoturismo.it",

      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-length": "985",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: "_fbp=fb.1.1639235688731.650051548; cookie-agreed=2",
      origin: "https://abruzzoturismo.it",
      referer: "https://abruzzoturismo.it/it/eventi-abruzzo-0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    method: "POST",
    body: JSON.stringify(
      `view_name=eventi&view_display_id=block_1&view_args=&view_path=%2Fit%2Fviews%2Fajax&view_base_path=eventi-abruzzo&view_dom_id=d7cc45afe596f91d4ceb744743a491592b1bbaacc3c4eef0a38ba5adbfdf23fc&pager_element=0&field_taxonomy_target_id=All&ajax_page_state%5Btheme%5D=gavias_sanbro&ajax_page_state%5Blibraries%5D=classy%2Fmessages%2Ccore%2Fhtml5shiv%2Ceu_cookie_compliance%2Feu_cookie_compliance%2Cgavias_blockbuilder%2Fgavias_blockbuilder.assets.field%2Cgavias_blockbuilder%2Fgavias_blockbuilder.assets.frontend%2Cgavias_sanbro%2Fgavias_sanbro.skin.blue%2Cgavias_sanbro%2Fglobal-styling%2Cgavias_sliderlayer%2Fgavias_sliderlayer.assets.frontend%2Cgeolocation%2Fgeolocation.commonmap%2Cgeolocation%2Fgeolocation.commonmap%2Cgeolocation%2Fgeolocation.commonmap%2Csystem%2Fbase%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cviews%2Fviews.module&_wrapper_format=drupal_ajax&page=2&_drupal_ajax=1&ajax_page_state%5Btheme_token%5D=`
    ),
  })
    .then((data) => ({
      statusCode: 200,
      body: data.json(),
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))
}
