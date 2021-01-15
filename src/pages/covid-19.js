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
import CircularProgress from "@material-ui/core/CircularProgress"
import covidimage from "../images/covidimageinformationalreport.png"
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
}))

const IndexPage = () => {
  const classes = useStyles()
  const [Articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  })

  const [hasMore, setHasMore] = useState(true)
  const [output, setOutput] = useState([])
  const [current, setCurrent] = useState(Articles.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === Articles.length) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      setCurrent(
        current.concat(Articles.slice(count.prev + 10, count.next + 10))
      )
    }, 2000)
    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }))
  }

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(`
https://raw.githubusercontent.com/emergenzeHack/covid19italia_data/master/issuesjson.json`)
      .then(response => response.json())
      .then(data => {
        if (!isCancelled) {
          setArticles(data)
          setLoading(false)
        }
      })
      .catch(error => console.log(error))

    return (isCancelled = true)
  }, [])

  return (
    <>
      <Layout>
        <SEO
          title="Covid-19 Informazioni dal comune di Fraine"
          description="covid19italia data emergenzeHack Informazioni dal comune di Fraine"
          keywords="covid abruzzo notizie locali"
        />
        <Container style={{ marginTop: "3rem" }} maxWidth="sm">
          <center>
            <img
              width="100%"
              src={covidimage}
              alt="coronavirus illustrazione animata"
            />
          </center>
        </Container>
        {loading ? (
          <center>
            <CircularProgress color="secondary" />
          </center>
        ) : (
          ""
        )}
        <Container className={classes.container} maxWidth="lg">
          <Grid container>
            {current.map((article, index) => {
              return (
                <>
                  <Grid key={index} item xs={12} md={4}>
                    <Card>
                      <CardContent key={index} className={classes.root}>
                        <Typography color="textSecondary" gutterBottom>
                          {article.Comune}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {article.Nome}
                        </Typography>
                        <Typography color="textSecondary"></Typography>
                        <Typography variant="body2" component="p">
                          {article.Descrizione}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.root}>
                        <Button size="small">
                          <a
                            rel="canonical noopener noreferrer"
                            target="_blank"
                            href={article.Link}
                          >
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
