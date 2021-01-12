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
          description="Condizioni metereologiche del comune di Fraine"
          keywords="meteo condizioni meteorologiche comuni Abruzzo Fraine weather app"
        />
        <Container maxWidth="sm">
          <App />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
