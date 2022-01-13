import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"

const Abruzzio = ({ pageContext }) => {
  console.log(pageContext)

  React.useEffect(() => {
     var divs = document.querySelectorAll("img")

    // console.log(title)
   // document.querySelectorAll(".group-right").style.css = "display: none"
    document.querySelectorAll(".leaflet-layer").style.css = "display: none"


  },[])
  let image = pageContext.data.results.ima ?  pageContext.data.results.ima : ""

  return (
    <>
          <GatsbySeo
        title={`${pageContext.data.results.title.substring(3)}`}
        description={`${pageContext.data.results.title.substring(3)}`}
        canonical={`https://www.prolocofraine.org/${pageContext.figa}`}
        openGraph={{
          url:`https://www.prolocofraine.org/${pageContext.figa}`,
          title: `${pageContext.data.results.title.substring(3)}`,
          description: `${pageContext.data.results.title.substring(3)}`,
          images: [
            {
              url: `${image}`,
              width: 800,
              height: 600,
              alt: `abruzzo itinerari e scoperte`,
            },
            {
              url: `${image}`,
              width: 900,
              height: 800,
              alt: `abruzzo turismo`,
            },
            { url: `${image}` },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Proloco Fraine",
          site: "https://prolocofraine.org",
          cardType: "summary_large_image",
        }}
      />
      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <article className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: pageContext.data.results.title }}
          />
        </article>
      </Container>
    </>
  )
}
export default Abruzzio
