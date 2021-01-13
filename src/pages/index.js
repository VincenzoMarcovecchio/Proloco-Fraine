import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postLink"
import clsx from "clsx"
import { graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import movie from "../Fraine.mp4"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Skeleton from "@material-ui/lab/Skeleton"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",

    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    width: "100%",
    margin: "auto",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "90%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const classes = useStyles()
  const [Articles, setArticles] = useState([])
  const [expanded, setExpanded] = useState(false)

  Articles.forEach(element => {
    element.expanded = expanded
  })

  const handleExpandClick = index => {
    let expandedcopy = [...Articles]
    expandedcopy[index].expa = !expanded
    setArticles(expandedcopy)
  }

  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }

  useEffect(() => {
    fetch(`https://prolocofraine.netlify.app/.netlify/functions/news`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  }, [])

  return (
    <>
      <Layout>
        <SEO
          title="Proloco Fraine"
          description=""
          keywords="abruzzo turismo risorse umane montagna mare salute benessere"
        />
        <div className="hero">
          <video
            width="100%"
            autoPlay
            loop
            muted
            style={{
              display: "grid",
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "90vh",
              margin: "0 auto",
            }}
          >
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h1>
            #ProLocoFraine
            <br />
            <span>unisce</span>
          </h1>
        </div>

        <Container maxWidth="lg">
          <h1 style={{ margin: "3rem auto 3rem 0" }}>Il Blog</h1>
        </Container>

        <Container className={classes.container} maxWidth="lg">
          <Grid container>
            {edges.map(edge => (
              <Grid key={edge.node.id} item sm={12} md={6}>
                <PostLink key={edge.node.id} post={edge.node} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider className={classes.divider} />
        <br />
        <br />
        <Container maxWidth="lg">
          <h1>Notizie dal web</h1>
        </Container>
        <br />
        <Container maxWidth="lg">
          <Grid container>
            {Articles.map((article, index) => {
              return (
                <>
                  <Grid key={index} item xs={12} md={4}>
                    <Card key={index} className={classes.root}>
                      <CardHeader
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={article.title}
                        subheader={new Date(article.publishedAt).toLocaleString(
                          "it-IT",
                          options
                        )}
                      />
                      {article.urlToImage ? (
                        <CardMedia
                          className={classes.media}
                          image={article.urlToImage}
                          title={article.title}
                        />
                      ) : (
                        <Skeleton animation="wave" />
                      )}
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="div"
                        >
                          {article.description ? (
                            <p
                              contentEditable="true"
                              dangerouslySetInnerHTML={{
                                __html: `${article.description}`,
                              }}
                            ></p>
                          ) : (
                            <Skeleton animation="wave" />
                          )}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>

                        <IconButton
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })}
                          onClick={() => handleExpandClick(index)}
                          aria-expanded={article.expa}
                          aria-label="scopri di piu"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardActions>
                      <Collapse in={article.expa} timeout="1" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>{article.content}</Typography>
                          <Typography>
                            Per leggere l'intero articolo clicca
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noreferrer noopener canonical"
                            >
                              qui
                            </a>
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                    <br />
                    <br />
                    <br />
                  </Grid>
                  <Divider className={classes.divider} />
                </>
              )
            })}
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
            description
          }
        }
      }
    }
  }
`
{
}
