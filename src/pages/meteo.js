import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import App from "../components/meteo/App"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Il meteo del comune di Fraine"
          description="Scopri le condizioni meteo nella tua citta` con l'app meteorologica  Proloco Fraine"
          keywords="meteo condizioni meteorologiche comuni Abruzzo Fraine weather app"
        />
        <Container style={{ padding: "3rem 0" }} maxWidth="sm">
          <App />
          <iframe
            src="https://www.rainviewer.com/map.html?loc=42.1636,12.9199,7&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=0&th=0&sm=1&sn=1"
            width="100%"
            frameBorder="0"
            style={{ border: "0", minHeight: "50vh", marginTop: "5rem" }}
            allowFullScreen
          ></iframe>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
