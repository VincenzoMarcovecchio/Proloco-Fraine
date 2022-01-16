import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default function Ciccccc({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  console.log(pageContext)
  return (
    <React.Fragment>
      <GatsbySeo
        title={`${
          pageContext.data.inDiscussione.value || pageContext.data.seduta.value
        }`}
        description={`${
          pageContext.data.inDiscussione.value || pageContext.data.seduta.value
        }`}
        canonical={`https://www.prolocofraine.org/${pageContext.ciaos}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${pageContext.ciaos}`,
          title: `${ pageContext.data.inDiscussione.value || pageContext.data.seduta.value}`,
          description: `${ pageContext.data.inDiscussione.value || pageContext.data.seduta.value}`,
          images: [
            {
              url: `https://quifinanza.it/wp-content/uploads/sites/5/2020/04/decreto-legge-e-decreto-legislativo.jpg`,
              width: 800,
              height: 600,
              alt: `Descreti legge`,
            },
            {
              url: `https://quifinanza.it/wp-content/uploads/sites/5/2020/04/decreto-legge-e-decreto-legislativo.jpg`,
              width: 900,
              height: 800,
              alt: `parlamento Italiano`,
            },
   
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Proloco Fraine",
          site: "https://prolocofraine.org",
          cardType: "summary_large_image",
        }}
      />
      <Container maxWidth="sm">
        <article className="blog-post">
          <div style={{ marginBottom: "2rem" }}>
            <Typography variant="subtitle1" gutterBottom component="div">
              {pageContext.data.inDiscussione.value ||
                pageContext.data.seduta.value}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <a
                href={pageContext.data.resoconto.value}
                rel="canonical noopener noreferrer"
              >
                Resoconto
              </a>
            </Typography>
          </div>
        </article>
      </Container>
    </React.Fragment>
  )
}
