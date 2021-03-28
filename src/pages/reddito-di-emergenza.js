import React from "react"

export default function componentName() {
  return (
    <>
      <p>hi</p>
    </>
  )
}

// import React from "react"
// import { Link } from "gatsby"
// import L from "leaflet"
// import { useEmergenzes } from "../hooks"
// import { Map } from "../components/Map"
// import Layout from "../components/layout"

// const LOCATION = {
//   lat: 38.9072,
//   lng: -77.0369,
// }
// const CENTER = [LOCATION.lat, LOCATION.lng]
// const DEFAULT_ZOOM = 2
// const DEFAULT_BASEMAP = "Mapbox"

// const IndexPage = () => {
//   const { emergenza } = useEmergenzes()
//   console.log(emergenza)

//   const emergenzeGeoJson = {
//     type: "FeatureCollection",
//     features: emergenza.map((eme = {}, i) => {
//       const { latitude, longitude } = eme
//       return {
//         type: "Feature",
//         properties: {
//           ...eme,
//         },
//         geometry: {
//           type: "Point",
//           coordinates: [longitude, latitude],
//         },
//       }
//     }),
//   }
//   console.log(emergenzeGeoJson)
//   /**
//    * mapEffect
//    * @description Fires a callback once the page renders
//    */

//   function mapEffect({ leafletElement: map } = {}) {
//     if (!map) return

//     map.eachLayer(layer => {
//       const { options = {} } = layer
//       const { name } = options
//       if (name === DEFAULT_BASEMAP) return
//       map.removeLayer(layer)
//     })

//     const geoJson = new L.GeoJSON(emergenzeGeoJson)
//     const geoJsonBounds = geoJson.getBounds()
//     console.log(geoJsonBounds)
//     geoJson.addTo(map)

//     map.fitBounds(geoJsonBounds)
//     map.setZoom(map.getZoom() - 1)
//   }

//   const mapSettings = {
//     center: CENTER,
//     defaultBaseMap: DEFAULT_BASEMAP,
//     zoom: DEFAULT_ZOOM,
//     mapEffect,
//   }

//   return (
//     <Layout>
//       <div className="home-hero">
//         <div className="home-hero-content">
//           <h1></h1>
//           <p>Your local family favorite resturant!</p>
//           <p>
//             <a href="#locations">View Locations</a>
//           </p>
//         </div>
//       </div>

//       <Map {...mapSettings} />

//       <div className="text-center home-locations">
//         <h2 id="locations">Locations</h2>
//         <ul>
//           {emergenza.map(eme => {
//             const { id, Regione, path } = eme
//             return (
//               <li key={id}>
//                 <Link to={path}>{Regione}</Link>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage
