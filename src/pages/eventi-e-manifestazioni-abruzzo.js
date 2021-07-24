import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"
import loga from "../images/abruzzo-logo.jpg"

const Manifesta = data => {
  useEffect(() => {
    var divs = document.querySelectorAll(".divvo a")

    for (let idx of divs) {
      idx.href = "https://www.giraitalia.it/abruzzo/eventi.htm"
      idx.target = "_blank"
      idx.rel = "noopener noreferrer canonical"
    }
  }, [])

  useEffect(() => {
    var divs = document.querySelectorAll(".pollo a")

    for (let idx of divs) {
      idx.target = "_blank"
      idx.rel = "noopener noreferrer canonical"
    }
  }, [])

  return (
    <Layout>
      <GatsbySeo
        title="Eventi e manifestazioni Abruzzesi 2021"
        description="Gli ultimi aggiornamenti su sagre, feste di paese, serate danzanti in Abruzzo"
        canonical="https://www.prolocofraine.org/eventi-e-manifestazioni-abruzzo"
        openGraph={{
          url: "https://www.prolocofraine.org/eventi-e-manifestazioni-abruzzo",
          title: "Calendario di eventi e manifestazioni Abruzzesi 2021",
          description:
            "Gli ultimi aggiornamenti su sagre, feste di paese, serate danzanti in Abruzzo",
          images: [
            {
              url: loga,
              width: 800,
              height: 600,
              alt: "Abruzzo logo turismo",
            },
            {
              url: loga,
              width: 900,
              height: 800,
              alt: "Abruzzo logo turismo",
            },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Vincenzo Marcovecchio",
          site: "Proloco Fraine",
          cardType: "summary_large_image",
        }}
      />
      <style>
        {`

 .pollo h2 {
  display:none;
}
.divvo ul li {
  list-style:initial;
}

.divvo img {
  display:none;
}
.cf {
  padding:0.3rem;
  border: 2px solid lightblue;;
}
span.testo_localita_centro_grigio:nth-of-child(1) {
  display: none;
}
html > body > div > div > main > div > div > span {
  display:none;
}
.adsense_bottom, .eventi, .cf {
  display:none;

}
.content {
  display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
}
.entry-date{
  display:none;
}
.item-location,
.item-categories,
.item-more {
  display:none;

}
`}{" "}
      </style>
      <center style={{ marginTop: "2rem" }}>
        <h2>❤️🍕 Eventi e manifestazioni Abruzzesi 2021 🌍🍕 </h2>
      </center>

      <Container style={{ marginTop: "3rem" }} maxWidth="md">
        {data.data.hello.results.rollo ? (
          <div
            className="pollo"
            dangerouslySetInnerHTML={{
              __html: data.data.hello.results.rollo,
            }}
          ></div>
        ) : (
          "caricamento in corso"
        )}
      </Container>
      <hr />
      <center style={{ marginTop: "2rem" }}>
        <h2>❤️🍕 C'è dell'altro 🌍🍕 </h2>
      </center>
      <Container maxWidth="sm">
        {data.data.puppa.results.corpo ? (
          <div
            className="divvo"
            dangerouslySetInnerHTML={{ __html: data.data.puppa.results.corpo }}
          ></div>
        ) : (
          "caricamento in corso"
        )}
      </Container>
    </Layout>
  )
}

export default Manifesta

export const pageQuery = graphql`
  query laquery {
    puppa {
      results {
        corpo
      }
    }
    hello {
      results {
        rollo
      }
    }
  }
`
