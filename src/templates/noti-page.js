import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

const Noti = ({ pageContext, data }) => {
  return (
    <>
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
        canonical={`https://www.prolocofraine.org/${pageContext.rela}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${pageContext.rela}`,
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
        <article className="blog-post">
          {data.articles.articles.filter(
            lio => lio.description == pageContext.data
          )[0].urlToImage && (
            <img
              style={{ width: "100%", height: "65vh", objectFit: "cover" }}
              alt={
                data.articles.articles.filter(
                  lio => lio.description == pageContext.data
                )[0].title
              }
              src={
                data.articles.articles.filter(
                  lio => lio.description == pageContext.data
                )[0].urlToImage
              }
            />
          )}
          <h1 style={{ margin: "2rem auto 2rem 0" }}>
            {
              data.articles.articles.filter(
                lio => lio.description == pageContext.data
              )[0].title
            }
          </h1>
          <div style={{ marginBottom: "2rem" }}>
            <span>
              <b>Autore:</b>&nbsp;{" "}
              {
                data.articles.articles.filter(
                  lio => lio.description == pageContext.data
                )[0].author
              }
            </span>
          </div>
          <time
            dateTime={
              data.articles.articles.filter(
                lio => lio.description == pageContext.data
              )[0].publishedAt
            }
          ></time>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{
              __html: data.articles.articles.filter(
                lio => lio.description == pageContext.data
              )[0].content,
            }}
          />
        </article>

        <br />
      </Container>
    </>
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
