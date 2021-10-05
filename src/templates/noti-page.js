import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

const Noti = ({ pageContext, data }) => {


  return (
    <Layout>
      <GatsbySeo
        title={
          data.articles.articles.filter(
            lio => lio.description == pageContext.data
          )[0].title
        }
        description={
          data.articles.articles.filter(
            lio => lio.description == pageContext.data
          )[0].description
        }
        canonical={single.url}
        openGraph={{
          url:
            `https://www.prolocofraine.org/${pageContext.rela}`,
          title: `${
            data.articles.articles.filter(
              lio => lio.description == pageContext.data
            )[0].title
          }`,
          description: `${
            data.articles.articles.filter(
              lio => lio.description == pageContext.data
            )[0].title
          }`,
          images: [
            {
              url: `${
                data.articles.articles.filter(
                  lio => lio.description == pageContext.data
                )[0].urlToImage
              }`,
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
        <h1>
          {
            data.articles.articles.filter(
              lio => lio.description == pageContext.data
            )[0].title
          }{" "}
        </h1>
        <h1>{pageContext.data}</h1>
        <br />
      </Container>
    </Layout>
  )
}

export default Noti
export const pageQuery = graphql`
  query ciao {
    articles {
      articles {
        author
        title
        description
        url
        urlToImage
        publishedAt
        content
      }
    }
  }
`
