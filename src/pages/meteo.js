import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import loadable from "@loadable/component"
const Meteo = () => {
  const LazyComponent = loadable(() => import(`../components/meteo/App`))

  return (
    <>
      <Layout>
        <p>suggerimenti per le giornate, ben accetti...</p>
        <Container
          style={{
            margin: "3rem auto",
            padding: "1rem",
          }}
          maxWidth="sm"
        >
          <LazyComponent />
        </Container>
      </Layout>
    </>
  )
}

export default Meteo
