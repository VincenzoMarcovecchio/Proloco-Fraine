import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

const Decreti = () => {
  return (
    <>
      <GatsbySeo
        title="Proloco Fraine | Decreti-Legge in corso di conversione"
        description="Ultimi Decreti-Legge esaminati, Il parlamento live"
        canonical="https://www.prolocofraine.org/ultimi-decreti-legge-esaminati-del-parlamento-italiano/"
        openGraph={{
          url:
            "https://www.prolocofraine.org/ultimi-decreti-legge-esaminati-del-parlamento-italiano/",
          title: "Ultimi Decreti-Legge esaminati",
          description:
            " Il parlamento live, gli ultimi Decreti-Legge esaminati",
          images: [
            {
              url:
                "https://www.parlamento.it/projects/parlamento/img/testata/imm_parlamento.gif",
              width: 800,
              height: 600,
              alt: "proloco fraine",
            },
            {
              url:
                "https://www.parlamento.it/projects/parlamento/img/testata/imm_parlamento.gif",
              width: 900,
              height: 800,
              alt: "proloco fraine",
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
      {/* {data.leggi.results.quotes? data.leggi.results.quotes.map(lol => {
        return <link rel="canonical" href={lol.href} />
      }): null} */}
      <style>
        {`caption {
                 margin-top: 3rem;
                 text-align: left;
              }

              .sddl{
                  pointer-events:none;
                  cursor:none
              }
              dt a {
                  font-size: 2rem;
                  text-decoration:underline !important;
              }
              `}
      </style>

      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <h1>Decreti legge in corso di conversione ⚖️ 👨‍💻 </h1>
        <br />
        {/* {data.leggi.results.title ? (
          <div
            dangerouslySetInnerHTML={{ __html: data.leggi.results.title }}
          ></div>
        ) : (
          "caricamento in corso"
        )} */}
      </Container>
    </>
  )
}

export default Decreti

// export const pageQuery = graphql`
//   query MyQuery {
//     leggi {
//       results {
//         title
//       }
//     }
//   }
// `
