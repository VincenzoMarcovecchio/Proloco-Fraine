import React from "react"
import Container from "@material-ui/core/Container"

export default function Ciccccc({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
 console.log(pageContext)
  return (
    <React.Fragment>
      
      <Container maxWidth="sm">
        <article className="blog-post">
          ciao
        </article>

        
      </Container>
    </React.Fragment>
  )
}


