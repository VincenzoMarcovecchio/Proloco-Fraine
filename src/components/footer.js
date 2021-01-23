import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import logoabruzzo from "../images/abruzzo-turismo.svg"
import { Link } from "gatsby"
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
    marginTop: {
      marginTop: "1rem",
    },
  })

  const classes = useStyles()
  return (
    <>
      <footer>
        <Container className={classes.root}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              © {new Date().getFullYear()}, Fatto a Fraine con
              <a
                target="_blank"
                rel="canonical noopener noreferrer"
                href="https://twitter.com/_vinny_92"
              >
                &nbsp;Gatsby
              </a>
            </span>
            <Link
              className={classes.marginTop}
              replace
              to="/prodotti-fitosanitari/"
            >
              Prodotti fitosanitari
            </Link>
            <img
              width="255"
              height="250"
              src={logoabruzzo}
              alt="logo Abruzzo risorse turismo"
            />
          </div>
          <a
            rel="noopener noreferrer canonical"
            href="https://www.buymeacoffee.com/Oa5oh3r"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              width="255"
              height="90"
            />
          </a>
        </Container>
      </footer>
    </>
  )
}
