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

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    width: "100%",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      maxWidth: "350px",
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
        <SEO title="Home" />
        <div className="hero">
          <video
            width="100%"
            title="proloco fraine"
            autoPlay
            loop
            muted
            style={{
              display: "grid",
              objectFit: "cover",
              width: "100%",
              height: "70vh",
              margin: "0 auto",
            }}
          >
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>Pro Loco Fraine #unisce</h1>
          <p>
            L'Associazione PRO LOCO Fraine ha come unico scopo l'organizzazione
            di eventi socio-culturali per l'intrattenimento di grandi e piccini.
          </p>
        </div>
        <br />
        <br />
        <br />
        <Container maxWidth="lg">
          <h1>Notizie dal web</h1>
        </Container>
        <br />
        <br />
        <Container className={classes.container} maxWidth="lg">
          <Grid container>
            {Articles.map((article, index) => {
              return (
                <>
                  <Grid item xs={12} sm={6}>
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
                      <CardMedia
                        className={classes.media}
                        image={article.urlToImage}
                        title={article.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="div"
                        >
                          <p
                            contentEditable="true"
                            dangerouslySetInnerHTML={{
                              __html: `${article.description}`,
                            }}
                          ></p>
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
                            Per leggere l'intero articolo clicca{" "}
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

          <aside>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/associazioneprolocofraine/"
              data-tabs="timeline"
              data-width="340"
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/associazioneprolocofraine/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/associazioneprolocofraine/">
                  Associazione PRO LOCO Fraine
                </a>
              </blockquote>
            </div>
            <div id="fb-root"></div>
            <br />
            <br />
            <br />
          </aside>
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
          }
        }
      }
    }
  }
`
{
  /* <h1>Blog</h1>
              {edges.map(edge => (
                <PostLink key={edge.node.id} post={edge.node} />
              ))} */
}
