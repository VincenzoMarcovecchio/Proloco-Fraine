import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import corona from "../../src/images/covidimageinformationalreport.png"
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
  gridItem: {
    marginBottom: "3rem",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO
          title="Covid-19"
          description="EmergenzeHack informazioni dal comune di Fraine"
          pathname="covid-19"
          image={corona}
          keywords="covid abruzzo notizie locali Fraine Vasto"
        />
        <Container style={{ marginTop: "3rem" }} maxWidth="sm">
          <center>
            <img
              className={classes.gridItem}
              alt="coronavirus illustrazione animata"
              src={corona}
              loa
            />
          </center>
        </Container>

        <Grid className={classes.gridItem} item xs={12} md={6}>
          <center>
            <iframe
              style={{ margin: "auto" }}
              height="300"
              width="500"
              frameBorder="0"
              allowFullScreen
              src="//umap.openstreetmap.fr/it/map/covid19italiahelp_434021?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
            ></iframe>
            <p>
              <a href="//umap.openstreetmap.fr/it/map/covid19italiahelp_434021">
                Visualizza a schermo intero
              </a>
            </p>
          </center>
          <center>
            <iframe
              style={{ margin: "auto" }}
              width="1440"
              height="500"
              title="iframe del sito "
              src="https://covid19italia.help/segnala-base/"
              frameborder="0"
            >
              <a href="https://covid19italia.help/segnala-base/">
                Segnalazioni Covid19Italia.help
              </a>
            </iframe>
          </center>
        </Grid>
      </Layout>
    </>
  )
}

export default IndexPage
