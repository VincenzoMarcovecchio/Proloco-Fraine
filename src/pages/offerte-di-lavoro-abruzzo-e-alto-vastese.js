import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
//ciao
const Lavoro = ({ data }) => {
  useEffect(() => {
    var divs = document.querySelectorAll(".tapItem")

    for (let idx of divs) {
      idx.href =
        "https://it.indeed.com/jobs?q=&l=Fraine%2C+Abruzzo&radius=50&from=serpso&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt"
    }
  }, [])

  return (
    <>
      <GatsbySeo
        title="Proloco Fraine | Offerte di lavoro in Abruzzo Fraine e dintorni"
        description="Agenzia locale per il locale"
        canonical="https://www.prolocofraine.org/offerte-di-lavoro-abruzzo-e-alto-vastese"
        openGraph={{
          url:
            "https://www.prolocofraine.org/offerte-di-lavoro-abruzzo-e-alto-vastese",
          title: "Offerte Di Lavoro",
          description: "Agenzia locale per il locale",
          images: [
            {
              url:
                "https://images.unsplash.com/photo-1577401159468-3bbc7ee440b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9iJTIwc2VhcmNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
              width: 800,
              height: 600,
              alt: "proloco fraine",
            },
            {
              url:
                "https://images.unsplash.com/photo-1577401159468-3bbc7ee440b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9iJTIwc2VhcmNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
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

      <style>
        {`button {
              display:none
          }
          `}
      </style>

      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <h1>Offerte di lavoro ricerca avanzata ;) </h1>
        <br />
        {data.jobs.results.title !== null ? (
          <div
            dangerouslySetInnerHTML={{ __html: data.jobs.results.title }}
          ></div>
        ) : (
          "caricamento in corso"
        )}
      </Container>
    </>
  )
}

export default Lavoro

export const pageQuery = graphql`
  {
    jobs {
      results {
        title
      }
    }
  }
`
