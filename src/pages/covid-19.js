import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Skeleton from "@material-ui/lab/Skeleton"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",

    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      flexDirection: "row",
      justifyContent: "space-between",
    },
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

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [Articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const reversed = Articles.reverse()
  const bull = <span className={classes.bullet}>•</span>

  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
  let isCancelled

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(
      `https://raw.githubusercontent.com/emergenzeHack/covid19italia_data/master/issuesjson.json`
    )
      .then(response => response.json())
      .then(data => {
        if (!isCancelled) {
          setArticles(data.reverse())
          setLoading(false)
        }
      })
      .catch(error => console.log(error))
    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <>
      <Layout>
        <SEO
          title="Covid-19 Informazioni dal comune di Fraine"
          description="covid19italia data emergenzeHack Informazioni dal comune di Fraine"
        />

        <Container maxWidth="lg">
          <h1 style={{ marginTop: "2rem" }}>Covid-19</h1>
        </Container>
        <br />
        <Container className={classes.container} maxWidth="lg">
          <Grid container>
            {Articles.map((article, index) => {
              return (
                <>
                  <Grid item xs={12} md={4}>
                    <Card>
                      {!isCancelled ? (
                        <Skeleton />
                      ) : (
                        <CardContent key={index} className={classes.root}>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            {article.title}&nbsp;
                          </Typography>
                          <Typography color="textSecondary" gutterBottom>
                            {new Date(article.issue.created_at).toLocaleString(
                              "it-IT",
                              options
                            )}
                          </Typography>
                          <Typography variant="h5" component="h2">
                            {article[index]?.issue?.data.Fonte}
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          ></Typography>
                          <Typography variant="body2" component="p">
                            {article.issue?.data?.Descrizione}
                          </Typography>
                        </CardContent>
                      )}

                      <CardActions>
                        <Button size="small">
                          <a
                            rel="canonical noopener noreferrer"
                            target="_blank"
                            href={article.issue?.data?.Link}
                          >
                            {" "}
                            scopri di piu`
                          </a>
                        </Button>
                      </CardActions>
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
