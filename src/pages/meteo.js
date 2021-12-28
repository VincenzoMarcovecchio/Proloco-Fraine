import React from "react"
import Container from "@material-ui/core/Container"
import loadable from "@loadable/component"
const Meteo = async () => {
  const LazyComponent = loadable(() => import(`../components/meteo/App`))

  let stri =
    "https://abruzzoturismo.it/it/una-storia-color-zafferano-un-fumetto-l-oro-rosso-dabruzzo"
  let cut = stri.split("/")[4]
  console.log(cut)
  return (
    <>
      <>
        <p>suggerimenti per le giornate, ben accetti...</p>
        <pre></pre>
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
    </>
  )
}

export default Meteo
