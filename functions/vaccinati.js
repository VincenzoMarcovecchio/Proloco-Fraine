const chromium = require("chrome-aws-lambda")
const puppeteer = require("puppeteer-core")

exports.handler = async (event, context, callback) => {
  let theTitle = null
  let browser = null
  console.log("spawning chrome headless")
  const callbackHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  try {
    const executablePath = await chromium.executablePath

    // setup
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: executablePath,
      headless: chromium.headless,
    })

    // Do stuff with headless chrome
    const page = await browser.newPage()
    const targetUrl =
      "https://app.powerbi.com/view?r=eyJrIjoiMzg4YmI5NDQtZDM5ZC00ZTIyLTgxN2MtOTBkMWM4MTUyYTg0IiwidCI6ImFmZDBhNzVjLTg2NzEtNGNjZS05MDYxLTJjYTBkOTJlNDIyZiIsImMiOjh9"

    // Goto page and then do stuff
    await page.goto(targetUrl, {
      waitUntil: ["domcontentloaded", "networkidle0"],
    })
    const [el] = await page.$x(
      '//*[@id="pvExplorationHost"]/div/div/exploration/div/explore-canvas-modern/div/div[2]/div/div[2]/div[2]/visual-container-repeat/visual-container-modern[11]/transform/div/div[3]/div/visual-modern/div/div/div/div[1]/div/div/div/div/div'
    )
    const txt = await datiaggiornatial.getProperty("textContent")
    const datiaggiornatial = await txt.jsonValue()
    theTitle = await page.title()
    console.log("done on page", theTitle)
  } catch (error) {
    console.log("error", error)
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: error,
      }),
    })
  } finally {
    // close browser
    if (browser !== null) {
      await browser.close()
    }
  }

  return callback(null, {
    statusCode: 200,
    headers: callbackHeaders,
    body: JSON.stringify({
      title: theTitle,
      aggiornamento: datiaggiornatial,
    }),
  })
}
