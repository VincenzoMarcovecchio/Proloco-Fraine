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
      <SEO
        // cover={frontmatter.cover}
        title="Ricette tipiche Frainesi"
        description="Un'insieme delle ricette tipiche Frainesi"
        keywords="cucina italiana ricette abruzzesi ricette tipiche abruzzesi"
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
