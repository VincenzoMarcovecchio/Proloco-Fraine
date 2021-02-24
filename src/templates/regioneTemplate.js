import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Marker } from "react-leaflet"

import { useEmergenza } from "../hooks"

import { :ayout } from "../components/layout"

import Map from "components/Map"

const TemplateRestaurant = ({ pageContext }) => {
  const { restaurant } = useRestaurant({
    byId: pageContext?.slug,
  })

  const {
    name,
    location,
    address,
    delivery,
    hours,
    phoneNumber,
    photo,
  } = restaurant
  const center = [location?.latitude, location?.longitude]

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   */

  function mapEffect({ leafletElement: map } = {}) {
    if (!map) return
  }

  const mapSettings = {
    center,
    zoom: 18,
    defaultBaseMap: "Mapbox",
    mapEffect,
  }

  return (
    <Layout pageName="restaurant">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div
        className="restaurant-hero"
        style={{
          backgroundImage: `url(${photo?.url})`,
        }}
      >
        <h1>{name}</h1>
      </div>

      <div className="restaurant-info">
        <h2>Address</h2>

        <h2>Phone Number</h2>

        <h2>Hours</h2>

        <h2>More Info</h2>
        <ul>
          <li>Delivery: {delivery ? "Yes" : "No"}</li>
        </ul>
      </div>
      <Map {...mapSettings}>
        <Marker position={center} />
      </Map>
    </Layout>
  )
}

TemplateRestaurant.propTypes = {
  pageContext: PropTypes.object,
}

export default TemplateRestaurant
