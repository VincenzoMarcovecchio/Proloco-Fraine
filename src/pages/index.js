import React, { useState } from "react"
import PostLink from "../components/postLink"
import clsx from "clsx"
import Container from "@material-ui/core/Container"
import movie from "../Fraine.mp4"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Skeleton from "@material-ui/lab/Skeleton"
import Masonry from "react-masonry-css"
import { graphql } from "gatsby"
import proloco from "../images/proloco.jpg"
import { BlogJsonLd } from "gatsby-plugin-next-seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
    marginBottom: "3rem",
  },
  root: {
    width: "100%",
    margin: "1rem auto",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
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
    articles,
  },
}) => {
  const classes = useStyles()
  const [Articles, setArticles] = useState([])
  const [expanded, setExpanded] = useState(false)
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  }

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

  return (
    <>
      <>
        <GatsbySeo
          title="Proloco Fraine"
          description="L'Associazione PRO LOCO Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo..."
          canonical="https://www.prolocofraine.org"
          openGraph={{
            url: "https://www.prolocofraine.org/",
            title: "Home",
            description:
              "L'Associazione PRO LOCO Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo...",

            images: [
              {
                url: proloco,
                width: 800,
                height: 600,
                alt: "proloco fraine",
              },
              {
                url: proloco,
                width: 900,
                height: 800,
                alt: "proloco fraine",
              },
            ],
            site_name: "Proloco Fraine",
          }}
          twitter={{
            handle: "Vincenzo Marcovecchio",
            site: "Proloco Fraine",
            cardType: "summary_large_image",
          }}
        />
        <BlogJsonLd
          url="https://prolocofraine.org"
          headline="Proloco Fraine"
          images={`${proloco}`}
          posts={[
            {
              headline: "Anagrafe Canina Regionale",
              image: "https://www.prolocofraine.org/images/anagrafe-canina.jpg",
            },
            {
              headline: "Alla scoperta di fraine",
              image:
                "https://www.prolocofraine.org/images/iscrizioni-proloco.jpg",
            },
            {
              headline: "Come richiedere il reddito di cittadinanza",
              image:
                "https://www.prolocofraine.org/images/iscrizioni-proloco.jpg",
            },
            {
              headline: "Il significato della proloco",
              image:
                "https://www.prolocofraine.org/images/iscrizioni-proloco.jpg",
            },
            {
              headline: "Alla scoperta di fraine",
              image:
                "https://www.prolocofraine.org/images/iscrizioni-proloco.jpg",
            },
          ]}
          datePublished="2021-02-05T08:00:00+08:00"
          dateModified="2021-02-05T09:00:00+08:00"
          authorName="Proloco Fraine Blogs"
          description="Il blog della proloco fraine puo essere molto interessante ed istruttivo"
        />
        <section className="hero">
          <video
            width="100%"
            autoPlay
            loop
            muted
            poster="/images/medieval-church.png"
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
            ProLocoFraine

          </h1>
        </section>

        <Container maxWidth="lg">
          <h1 style={{ margin: "3rem auto 3rem 0" }}>Il Blog</h1>
        </Container>

        <Container className={classes.container} maxWidth="lg">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {edges.map(edge => (
              <PostLink key={edge.node.id} post={edge.node} />
            ))}
          </Masonry>
        </Container>
        <Divider className={classes.divider} />

        <Container maxWidth="lg">
          <h1>Notizie dal web</h1>
        </Container>
        <Container maxWidth="lg">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {articles.articles[2].content.length > 50
              ? articles.articles.map((article, index) => {
                  return (
                    <>
                      <Card key={index} className={classes.root}>
                        <CardHeader
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={article.title}
                          subheader={new Date(
                            article.publishedAt
                          ).toLocaleString("it-IT", options)}
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
                                  __html: `${article?.content?.substring(
                                    0,
                                    200
                                  )}`,
                                }}
                              ></p>
                            ) : (
                              <Skeleton animation="wave" />
                            )}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <a
                              title="leggi di piu"
                              name="articolo redirect"
                              href={article.url}
                              target="_blank"
                              rel="noreferrer noopener canonical"
                            >
                              <FavoriteIcon />{" "}
                            </a>
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>

                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded,
                            })}
                            // onClick={() => handleExpandClick(index)}
                            aria-expanded="false"
                            aria-label="scopri di piu"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </>
                  )
                })
              : "troppe richieste"}
          </Masonry>
        </Container>
      </>
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
    articles {
      articles {
        author
        title
        description
        url
        urlToImage
        publishedAt
        content
      }
    }
  }
`
