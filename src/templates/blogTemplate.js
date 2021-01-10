import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={frontmatter.cover}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <section className="blog-post-container">
        <Container maxWidth="sm">
          <article className="blog-post">
            {frontmatter.cover && (
              <img
                width="100%"
                height="80%"
                style={{ maxHeight: "80vh", objectFit: "cover" }}
                alt={frontmatter.title}
                src={frontmatter.cover}
              />
            )}
            <h1 style={{ margin: "2rem auto 2rem 0" }}>{frontmatter.title}</h1>
            <time dateTime={frontmatter.date}> </time>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          <Link to="/">Torna indietro</Link>

          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&autoLogAppEvents=1&version=v9.0&appId=407785027087673"
            nonce="rlVIHZ6h"
          ></script>
          <div
            className="fb-comments"
            data-href="http://www.prolocofraine.org/*"
            data-width="100%"
            data-numposts="5"
          ></div>
        </Container>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
        cover
        keywords
      }
    }
  }
`
