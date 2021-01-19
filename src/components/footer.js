import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import logoabruzzo from "../images/abruzzo-turismo.svg"
import TwitterIcon from "@material-ui/icons/Twitter"
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              © {new Date().getFullYear()}, Built in Fraine with
              <a
                target="_blank"
                rel="canonical noopener noreferrer"
                href="https://twitter.com/_vinny_92"
              >
                &nbsp;Gatsby
              </a>
            </span>
            <img
              width="125"
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
              height="60"
              width="200"
            />
          </a>
        </Container>
      </footer>
    </>
  )
}
