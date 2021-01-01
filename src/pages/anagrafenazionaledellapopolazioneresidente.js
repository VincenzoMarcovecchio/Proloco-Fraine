import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
export default function AnagrafeNazionaledellaPopolazioneResidente() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://dashboard.anpr.it/api/comune/069034")
      .then(response => response.json())
      .then(dataresult => {
        setData(dataresult)
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
