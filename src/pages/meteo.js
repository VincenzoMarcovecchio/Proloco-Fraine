import React from "react"
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
        <p>suggerimenti per le giornate, ben accetti...</p>
        <Container
          style={{
            margin: "3rem auto",
            padding: "1rem",
          }}
          maxWidth="sm"
        >
          <App />
        </Container>
      </Layout>
    </>
  )
}

export default React.memo(IndexPage)
