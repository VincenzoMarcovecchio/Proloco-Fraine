import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { Map as BaseMap, TileLayer, ZoomControl } from "react-leaflet"

import { useConfigureLeaflet, useMapServices, useRefEffect } from "../hooks"
import { isDomAvailable } from "../lib/util"

const DEFAULT_MAP_SERVICE = "OpenStreetMap"

export const Map = props => {
  useRefEffect({
    ref: mapRef,
    effect: mapEffect,
  })
  const mapRef = useRef()

  const {
    children,
    defaultBaseMap = DEFAULT_MAP_SERVICE,
    mapEffect,
    ...rest
  } = props

  useConfigureLeaflet()

  useEffect(() => {
    const { current = {} } = mapRef
    const { leafletElement: map } = current

    // Invaliding the size on page load to avoid issues when navigating between
    // two different pages

    requestAnimationFrame(() => {
      map.invalidateSize()
    })
  }, [])

  const services = useMapServices({
    names: [...new Set([defaultBaseMap, DEFAULT_MAP_SERVICE])],
  })
  const basemap = services.find(service => service.name === defaultBaseMap)

  const mapSettings = {
    zoomControl: false,
    ...rest,
  }

  if (!isDomAvailable()) {
    return (
      <div>
        <p className="map-loading">Loading map...</p>
      </div>
    )
  }

  return (
    <div>
      <BaseMap ref={mapRef}>
        {children}
        {basemap && <TileLayer {...basemap} />}
        <ZoomControl position="bottomright" />
      </BaseMap>
    </div>
  )
}

Map.propTypes = {
  children: PropTypes.node,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
}
