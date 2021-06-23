import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { ArticleJsonLd } from "gatsby-plugin-next-seo"
import proloco from "../images/proloco.jpg"
import { FacebookProvider, Comments } from "react-facebook"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(markdownRemark)
  return (
    <Layout>
      <GatsbySeo
        title={`${frontmatter.title}`}
        description={`${frontmatter.description}`}
        canonical={`https://www.prolocofraine.org/${frontmatter.slug}`}
        openGraph={{
          url: "https://www.prolocofraine.org/",
          title: `${frontmatter.title}`,
          description: `${frontmatter.description}`,
          images: [
            {
              url: `https://prolocofraine.org${frontmatter.cover}`,
              width: 800,
              height: 600,
              alt: `${frontmatter.title}`,
            },
            {
              url: `https://prolocofraine.org${frontmatter.cover}`,
              width: 900,
              height: 800,
              alt: `${frontmatter.title}`,
            },
            { url: `https://prolocofraine.org${frontmatter.cover}` },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Proloco Fraine",
          site: "https://prolocofraine.org",
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        url={`https://www.prolocofraine.org/${frontmatter.slug}`}
        headline={`${frontmatter.title}`}
        images={`https://prolocofraine.org${frontmatter.cover}`}
        datePublished="2021-02-05T08:00:00+08:00"
        dateModified="2021-02-05T09:00:00+08:00"
        authorName="Proloco"
        publisherName="Proloco Fraine"
        publisherLogo={proloco}
        description={`${frontmatter.title}`}
        overrides={{
          "@type": "BlogPosting", // set's this as a blog post.
        }}
      />
      <Container maxWidth="sm">
        <article className="blog-post">
          {frontmatter.cover && (
            <img
              style={{ width: "100%", height: "65vh", objectFit: "cover" }}
              alt={frontmatter.title}
              src={frontmatter.cover}
            />
          )}
          <h1 style={{ margin: "2rem auto 2rem 0" }}>{frontmatter.title}</h1>
          <div style={{ marginBottom: "2rem" }}>
            <span>
              <b>Autore:</b>&nbsp;{frontmatter.author}
            </span>
          </div>
          <time dateTime={frontmatter.date}> </time>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <FacebookProvider appId="407785027087673">
          <Comments href={`https://prolocofraine.org/${frontmatter.slug} `} />
        </FacebookProvider>
      </Container>
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
        author
        tags
        cover
        keywords
      }
    }
  }
`
