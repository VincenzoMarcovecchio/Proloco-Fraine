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
import Container from "@material-ui/core/Container"
const useStyles = makeStyles({
  root: {
    width: "100%",
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
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const frontmatter = markdownRemark.frontmatter
  const html = markdownRemark.html

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={frontmatter.cover}
        description={frontmatter.description}
      />
      <section className="blog-post-container">
        <Container maxWidth="md">
          <br />
          <br />
          <h1>Ricette tradizionali Frainesi</h1>
          <br />
          <article className={classes.root} className="blog-post">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={frontmatter.cover}
                  title={frontmatter.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link to={frontmatter.slug}>{frontmatter.title}</Link>
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {frontmatter.description}
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

          <Link to="/">Torna indietro</Link>
          <br />
          <br />
          <br />
        </Container>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { category: { eq: "ricette" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        cover
      }
    }
  }
`
