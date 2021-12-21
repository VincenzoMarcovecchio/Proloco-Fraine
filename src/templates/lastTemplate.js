import React from "react"
import Container from "@material-ui/core/Container"

export default function Ciccccc({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
 
  return (
    <React.Fragment>
      
      <Container maxWidth="sm">
        <article className="blog-post">
          ciao
          <pre>{pageContext.data}</pre>
        </article>

        
      </Container>
    </React.Fragment>
  )
}


