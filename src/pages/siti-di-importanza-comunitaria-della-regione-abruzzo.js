import React from "react"
import L from "leaflet"
import { Marker, useMap, Popup } from "react-leaflet"
import Map from "../components/Map"
import Layout from "../components/layout"

var jsonData = require("../data/luoghi.json")

function Luoghi() {
  const LOCATION = {
    lat: 38.9072,
    lng: -77.0369,
  }

  console.log(jsonData)
  const CENTER = [LOCATION.lat, LOCATION.lng]
  const DEFAULT_ZOOM = 2
  const ZOOM = 10

  const timeToZoom = 2000
  const timeToOpenPopupAfterZoom = 4000
  const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000

  const popupContentHello = `<p>Hello 👋</p>`
  const popupContentGatsby = `
        <div class="popup-gatsby">
          <div class="popup-gatsby-image">

          </div>
          <div class="popup-gatsby-content">
            <h1>Gatsby Leaflet Starter</h1>
            <p>Welcome to your new Gatsby site. Now go build something great!</p>
          </div>
        </div>
      `

  const mapSettings = {
    defaultBaseMap: "OpenStreetMap",
  }

  return (
    <>
      <Layout>
        <p>hi</p>

        <Map {...mapSettings}>
          {jsonData.map(entry => {
            const position = [entry.DO_Y, entry.DO_X]
            return (
              <Marker key={entry.Codice} position={position}>
                <Popup>{entry.DO_Y}</Popup>
              </Marker>
            )
          })}
        </Map>
      </Layout>
    </>
  )
}

export default Luoghi
