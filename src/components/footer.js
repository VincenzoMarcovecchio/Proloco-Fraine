import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import logoabruzzo from "../images/abruzzo-turismo.svg"
import acqualife from "../images/acqualife.png"
import contipubbliciterritoriali from "../images/conti-pubblici-territoriali.svg"
import opendata from "../images/open-data.svg"
import postsisma from "../images/post-sisma.svg"
import proteggereambiente from "../images/proteggere-lambiente.jpg"
import { Link } from "gatsby"

export default function Footer() {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100%",
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
          <div className="link-utili">
            <span>Link utili</span>
            <ul>
              <li>
                <Link
                  className={classes.marginTop}
                  replace
                  to="/prodotti-fitosanitari/"
                >
                  Prodotti fitosanitari
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons-logos">
            <a
              href="http://abruzzoturismo.it"
              rel="canonical noopener noreferrer"
              target="_blank"
            >
              <img
                width="115"
                height=""
                src={logoabruzzo}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
            <a
              href="http://www.regione.abruzzo.it/content/progetto-life12-bioit000231-aqualife"
              rel="canonical noopener noreferrer"
              target="_blank"
            >
              <img
                width="115"
                height=""
                src={acqualife}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
            <a href="http://www.regione.abruzzo.it/content/conti-pubblici-territoriali">
              <img
                width="115"
                height=""
                src={contipubbliciterritoriali}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
            <a
              href="http://opendata.regione.abruzzo.it"
              rel="canonical noopener noreferrer"
              target="_blank"
            >
              <img
                width="115"
                height=""
                src={opendata}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
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
              height="70"
            />
          </a>
          <center>
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
          </center>
        </Container>
      </footer>
    </>
  )
}
