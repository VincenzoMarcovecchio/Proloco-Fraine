import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"


export default function Ciccccc({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  console.log(pageContext)
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <article className="blog-post">
          <div style={{ marginBottom: "2rem" }}>
            <Typography variant="subtitle1" gutterBottom component="div">
              {pageContext.data.inDiscussione.value || null}
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
