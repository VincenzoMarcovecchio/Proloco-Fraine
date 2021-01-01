import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

export default function Footer() {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column-reverse",
      width: "100%",
      height: "100%",
      ["@media (min-width:780px)"]: {
        // eslint-disable-line no-useless-computed-key
        flexDirection: "row",
        alignItems: "flex-start",
      },
    },
  })
  const classes = useStyles()
  return (
    <>
      <footer>
        <Container className={classes.root}>
          <span>
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
          </span>
          <img
            width="150"
            src="images/regioneabruzzo.jpg"
            alt="logo Abruzzo risorse turismo"
          />
        </Container>
      </footer>
    </>
  )
}
