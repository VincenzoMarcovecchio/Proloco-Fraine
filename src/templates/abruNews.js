import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const Abruzzio = ({ pageContext }) => {
  let luca = pageContext.data
  console.log(pageContext)

  return (
    <>
      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <article className="blog-post">ciao</article>
      </Container>
    </>
  )
}
export default Abruzzio
