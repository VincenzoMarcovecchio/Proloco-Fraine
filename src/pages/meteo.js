import React from "react"
import Container from "@material-ui/core/Container"
import loadable from "@loadable/component"
const Meteo =  () => {
  //kk
  const LazyComponent = loadable(() => import(`../components/meteo/App`))

  return (
    <>
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
    </>
  )
}

export default Meteo
