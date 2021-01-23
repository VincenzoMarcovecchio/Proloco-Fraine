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

const IndexPage = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO
          description="EmergenzeHack informazioni dal comune di Fraine"
          title="Covid-19 "
          keywords="covid abruzzo notizie locali Fraine Vasto"
          image={data.file.childImageSharp.fluid.src}
        />
        <Container style={{ marginTop: "3rem" }} maxWidth="sm">
          <center>
            <Img
              className={classes.gridItem}
              alt="coronavirus illustrazione animata"
              fluid={data.file.childImageSharp.fluid}
              loa
            />
          </center>
        </Container>

        {!data ? (
          <center>
            <CircularProgress color="secondary" />
          </center>
        ) : (
          ""
        )}
        <Container className={classes.container} maxWidth="lg">
          <Grid container>
            <>
              <Grid item xs={12} className={classes.gridItem} md={6}>
                <Card>
                  <CardContent className={classes.root}>
                    <Typography color="textSecondary" gutterBottom>
                      Regione Abruzzo
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Provincia di Chieti
                    </Typography>
                    <Typography color="textSecondary"></Typography>
                    <Typography variant="body2" component="p">
                      {data.covid.internal.content.substring(34)}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.root}>
                    <Button size="small">
                      <a
                        rel="canonical noopener noreferrer"
                        target="_blank"
                        href={"https://www.covid19italia.help/"}
                      >
                        scopri di piu`
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Divider className={classes.divider} />
            </>
            )
            <Grid className={classes.gridItem} item xs={12} md={6}>
              <iframe
                width="800"
                height="500"
                aria-title="covid help"
                src="https://covid19italia.help/segnala-base/"
                frameborder="0"
              >
                <a href="https://covid19italia.help/segnala-base/">
                  Segnalazioni Covid19Italia.help
                </a>
              </iframe>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "covidimageinformationalreport.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    covid(Provincia: { eq: "Chieti" }) {
      id
      internal {
        content
        contentDigest
        description
        fieldOwners
        ignoreType
        mediaType
      }
    }
  }
`

export default IndexPage
