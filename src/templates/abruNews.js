import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"

const Abruzzio = ({ pageContext }) => {
  console.log(pageContext)
  if (typeof window !== `undefined`) {
  var title = document.querySelectorAll(
    ".field--name-node-title > h2"
  ).innerText
  console.log(title)
  }
  useEffect(() => {
    var divs = document.querySelectorAll("img")

    document.querySelectorAll(".group-right").style.css = "display: none"
    document.querySelectorAll(".leaflet-layer").style.css = "display: none"

    for (let element of divs) {
      let sorca = element.src
      let gigi = sorca.replace(window.location.origin, "")
      element.src = `https://abruzzoturismo.it${gigi}`
    }
  })
  return (
    <>
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
