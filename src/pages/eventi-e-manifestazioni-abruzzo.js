import React, { useEffect } from "react"
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
    var divs = document.querySelectorAll(".item-title")
    var an = document.querySelectorAll(".no-border a")
    var imga = document.querySelectorAll(".no-border img")

    imga.forEach(async element => {
      let gigi = await element.src.replace("https://prolocofraine.org", "")
      let srca = await `https://abruzzoturismo.com${gigi}`
      element.src = srca
    })

    an.forEach(element => {
      let srca = `https://abruzzoturismo.com${element.href}`
      element.href = srca
    })

    for (let idx of divs) {
      idx.target = "_blank"
      idx.rel = "noopener noreferrer canonical"
    }
  }, [])

  return (
    <>
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
.pollo {
  
  padding-top:2rem;
  margin-bottom: 2rem;
}
 .divvo h2 {
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

.elm-wrapper .elm-events-pro-wrapper {
  padding: 3rem 0;
}
.entry-date{
  display:none;
}
.item-location,
.item-categories,
.item-more {
  display:none;

}
.item-excerpt{
  color:rgba(0,0,0,.8);
}

`}
      </style>
      <center style={{ marginTop: "2rem" }}>
        <h2>❤️ Eventi e manifestazioni Abruzzesi 2021 🌍 </h2>
        <small>il top del top ;)</small>
      </center>

      <Container style={{ marginTop: "3rem" }} maxWidth="lg">
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
      <Container style={{ marginTop: "3rem" }} maxWidth="lg">
        {data.data.hello.results.rollo ? (
          <>
            <div
              className="pollo"
              dangerouslySetInnerHTML={{
                __html: data.data.pollo1.results.title,
              }}
            ></div>
            <div
              className="pollo"
              dangerouslySetInnerHTML={{
                __html: data.data.pollo2.results.title,
              }}
            ></div>
          </>
        ) : (
          "caricamento in corso"
        )}
      </Container>
      <hr />
      <center style={{ marginTop: "2rem" }}>
        <h2>C'è dell'altro 🍝🍝 </h2>
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
    </>
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
    pollo1 {
      results {
        title
      }
    }
    pollo2 {
      results {
        title
      }
    }
  }
`
