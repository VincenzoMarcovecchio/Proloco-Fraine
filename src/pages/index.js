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
import Avatar from "@material-ui/core/Avatar"
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
    maxWidth: 345,
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
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=it&apiKey=0121e101985943d88d6b3a5ac0817273`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  }, [])

  console.log(Articles)

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <video
          width="90%"
          aria-title="momenti di vita quotidiana di un borgo abruzzese"
          autoPlay
          loop
          muted
          style={{
            display: "grid",
            objectFit: "cover",
            width: "100vw",
            height: "70vh",
            margin: "0 auto",
          }}
        >
          <source src={movie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <br />
        <br />
        <Container className={classes.container} maxWidth="lg">
          <center>
            <h1>
              L'Associazione PRO LOCO Fraine ha come unico scopo
              l'organizzazione di eventi socio-culturali per l'intrattenimento
              di grandi e piccini.
            </h1>
          </center>
        </Container>
        <br />
        <br />
        <br />
        <Container maxWidth="lg">
          <h2>Notizie dal web</h2>
        </Container>
        <br />
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
                          component="p"
                        >
                          {article.description}
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
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="scopri di piu"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>{article.content}</Typography>

                          <Typography>
                            Per leggere l'intero articolo clicca{" "}
                            <a
                              href=""
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
                </>
              )
            })}
          </Grid>
          <Divider className={classes.divider} />
          <aside>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/associazioneprolocofraine"
              data-width="340"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
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
