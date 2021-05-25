import React from "react"
import { LocalBusinessJsonLd } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
const Mater = () => (
  <React.Fragment>
    <Layout>
      <LocalBusinessJsonLd
        type="Restaurant"
        id="http://prolocofraine.org/mater-domini"
        name="Ristorante Pizzeria la vecchia quercia"
        description="Relax natura e buon cibo"
        url="http://www.prolocofraine.org/mater-domini"
        telephone="0873953290"
        address={{
          streetAddress: "via santa maria mater domini",
          addressLocality: "Fraine",
          addressRegion: "CH",
          postalCode: "66050",
          addressCountry: "IT",
        }}
        geo={{
          latitude: "41.9064",
          longitude: "14.487352",
        }}
        images={["https://prolocofraine.org/images/Paese tipico Abruzzese.jpg"]}
      />
      <h1>hello from mater domini</h1>
    </Layout>
  </React.Fragment>
)

export default Mater
