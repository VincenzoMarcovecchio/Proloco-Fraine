import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

const Noti = ({ pageContext, data }) => {
  console.log(pageContext, data)
  const [single, setSingle] = React.useState(data.articles.articles.filter(lio => lio.description == pageContext.data))

   console.log(single)
   console.log(data.articles.articles.filter(lio => lio.description == pageContext.data)[0].title)
  return (
    <Layout>
      <GatsbySeo
        title={single.author}
        description={single.description}
        canonical={single.url}
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


      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <h1>{single.description} </h1>
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
