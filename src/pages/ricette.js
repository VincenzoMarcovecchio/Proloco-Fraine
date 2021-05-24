import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { BreadcrumbJsonLd } from "gatsby-plugin-next-seo"
import { BlogJsonLd } from "gatsby-plugin-next-seo"
const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "2rem",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      maxWidth: 345,
    },
  },
  media: {
    height: 140,
  },
})

export default function Category({ data }) {
  const classes = useStyles()
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  return (
    <Layout>
      <BlogJsonLd
        url="https://prolocofraine.org/ricette"
        headline="Proloco Fraine | Ricette tradizionali Abruzzesi"
        images="https://prolocofraine.org/images/nocche-fritte.jpg"
        posts={[
          {
            headline: "Le nocche fritte",
            image: "https://www.prolocofraine.org/images/nocche-fritte.jpg",
          },
          {
            headline: "Le dolci esse",
            image:
              "https://www.prolocofraine.org/images/dolce-tipico-abruzzese-le-esse.jpg",
          },
        ]}
        datePublished="2021-02-05T08:00:00+08:00"
        dateModified="2021-02-05T09:00:00+08:00"
        authorName="Proloco Fraine Blogs"
        description="Il blog della proloco fraine puo essere molto interessante ed istruttivo"
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Le nocche fritte",
            item: "https://www.prolocofraine.org/come-fare-le-nocche-fritte/",
          },
          {
            position: 2,
            name: "Le dolci esse",
            item:
              "https://www.prolocofraine.org/dolce-tipico-abruzzese-le-esse/",
          },
        ]}
      />

      <section className="blog-post-container">
        <Link to="/">Torna indietro</Link>
        <Container maxWidth="md">
          <h1 style={{ margin: "3rem auto 3rem 0" }}>
            Ricette tradizionali Frainesi
          </h1>
          <Grid container>
            {data.allMarkdownRemark.edges.map(element => {
              return (
                <Grid key={element.node.frontmatter.title} item sm={12} md={6}>
                  <article className={classes.root} className="blog-post">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={element.node.frontmatter.cover}
                          title={element.node.frontmatter.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            <Link
                              replace
                              to={`/${element.node.frontmatter.slug}/`}
                            >
                              {element.node.frontmatter.title}
                            </Link>
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            {element.node.frontmatter.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Condividi
                        </Button>
                        <Button size="small" color="primary">
                          Scopri di piu`
                        </Button>
                      </CardActions>
                    </Card>
                  </article>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "ricette" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            category
            cover
            date
            description
            path
            keywords
            slug
            tags
            title
            author
          }
        }
      }
    }
  }
`
