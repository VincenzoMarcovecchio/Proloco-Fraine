import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import data from "../data/fito.json"
export default function Fitosdanitari() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(data)
      .then(response => response.json())
      .then(dataresult => {
        console.log(dataresult)
      })
  }, [])

  return (
    <>
      <Layout>
        <SEO
          title="Anagrafe Nazionale della Popolazione Residente"
          description="Anagrafe Nazionale della Popolazione Residente"
        />
        <Container maxWidth="md">
          <pre>{data}</pre>
        </Container>
      </Layout>
    </>
  )
}
