import React from "react"
import { graphql } from "gatsby"
import Container from "@material-ui/core/Container"

const NewComponent = data => {
  return (
    <Container style={{ marginTop: "3rem" }} maxWidth="sm">
      {data.data.pollodocs.results.title !== undefined ? (
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.pollodocs.results.title,
          }}
        ></div>
      ) : (
        "caricamento in corso"
      )}
    </Container>
  )
}

export const pageQuery = graphql`
  {
    pollodocs {
      results {
        title
      }
    }
  }
`

export default NewComponent
