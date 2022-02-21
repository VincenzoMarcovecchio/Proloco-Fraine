import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo, ArticleJsonLd } from "gatsby-plugin-next-seo"

const Notia = ({ pageContext }) => {
  
  console.log(pageContext)
let url = pageContext.data.url.split("/")[3]
let tempo = new Date()
  return (
    <>
       <GatsbySeo
        title={pageContext.data.title}
        description={pageContext.data.description}
        canonical={`https://www.prolocofraine.org/${url}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${url}`,
          type: "article",
          article: {
            publishedTime: tempo.today(),
            modifiedTime: tempo.today(),
            expirationTime: tempo.today(),
            section: "",
            authors: ["zonalocale"],
            tags: ["News", "Abruzzo", "Cronaca","Zona Locale","Pescara","Lanciano","Fraine","Carabinieri"],
          },
          title: `${pageContext.data.title}`,
          description: `${pageContext.data.description}`,
          images: [
            {
              url: `${pageContext.data.ima}`,
              width: 800,
              height: 600,
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

      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <article className="blog-post">
          {pageContext.data.ima && (
            <img
              style={{ width: "100%", height: "65vh", objectFit: "cover" }}
              alt={pageContext.data.title}
              src={pageContext.data.ima}
            />
          )}
          <h1 style={{ margin: "2rem auto 2rem 0" }}>
            {pageContext.data.title}
          </h1>
          <div style={{ marginBottom: "2rem" }}>
            <span>
              <b>Autore:</b>&nbsp; <a rel="canonicale noopener noreferrer" target="_blank" href="https://zonalocale.it">Zona Locale</a>
            </span>
          </div>
          <time dateTime={tempo.today()}></time>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{
              __html: pageContext.data.description + "...",
            }}
          />
        </article>

        <br />
      </Container>
    </>
  )
}

export default Notia
