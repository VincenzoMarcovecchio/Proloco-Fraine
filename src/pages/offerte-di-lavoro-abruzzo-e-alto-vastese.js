import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"

const Lavoro = () => {
  const [string, setString] = useState([])

  console.log(string)

  useEffect(() => {
    fetch(`https://crawler222.herokuapp.com/`)
      .then(res => res.json())
      .then(data => (console.log(data), setString(data)))
  }, [])

  return (
    <Layout>
      <SEO title="Offerte di lavoro in Abruzzo Fraien e dintorni" />
      <h1>Offerte di lavoro </h1>
      <style>
        {`button {
              display:none
          }
          a {
            pointer-events: none;
            cursor: default;
          }`}
      </style>

      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        {string.results ? (
          <div dangerouslySetInnerHTML={{ __html: string.results.title }}></div>
        ) : (
          "caricamento in corso"
        )}
      </Container>
    </Layout>
  )
}

export default Lavoro
