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
      backgroundColor: "rgb(247,249,250 )  ",
    },
    marginTop: {
      marginTop: "1rem",
    },
  })

  const classes = useStyles()

  return (
    <React.Fragment>
      <div
        style={{ width: "100%", height: "100%", marginTop: "2rem" }}
        className="prefix__separator"
      >
        <svg viewBox="0 0 1399 48" preserveAspectRatio="xMidYMax slice">
          <style>
            {
              ".prefix__st1,.prefix__st2{stroke:#a8bdd9}.prefix__st1{stroke-opacity:.5;fill-opacity:1;fill:#e3e4e6}.prefix__st2{opacity:.5;fill:none}"
            }
          </style>
          <path
            fill="#f7f9fa"
            d="M1154.7 10l-143.4 6.4-115.9 19.8-120-19.8L670.6 42 548.3 16.4 447.4 42 326.1 10 150.9 42 0 16.4V48h1399V16.4L1266.4 42z"
          />
          <path
            opacity={0.3}
            fill="none"
            stroke="#003e91"
            d="M1399 16.4L1266.4 42l-111.7-32-143.4 6.4-115.9 19.8-120-19.8L670.6 42 548.3 16.4 447.4 42 326.1 10 150.9 42 0 16.4"
          />
          <circle className="prefix__st1" cx={151} cy={42} r={5} />
          <circle className="prefix__st1" cx={449} cy={42} r={5} />
          <circle className="prefix__st1" cx={672} cy={42} r={5} />
          <circle className="prefix__st1" cx={895} cy={37} r={5} />
          <circle className="prefix__st1" cx={1013} cy={15} r={5} />
          <circle className="prefix__st1" cx={1268} cy={42} r={5} />
          <circle className="prefix__st1" cx={327} cy={10} r={5} />
          <circle className="prefix__st2" cx={327} cy={10} r={9} />
          <circle className="prefix__st1" cx={550} cy={15} r={5} />
          <circle className="prefix__st2" cx={550} cy={15} r={9} />
          <circle className="prefix__st1" cx={776} cy={17} r={5} />
          <circle className="prefix__st2" cx={776} cy={17} r={9} />
          <circle className="prefix__st1" cx={1155} cy={10} r={5} />
          <circle className="prefix__st2" cx={1155} cy={10} r={9} />
        </svg>
      </div>
      <footer style={{ backgroundColor: "rgb(247,249,250 )  " }}>
        <Container className={classes.root}>
          <div className="link-utili">
            <ul>
              <li>Link utili</li>
              <li>
                <Link
                  rel="canonical noopener noreferrer"
                  className={classes.marginTop}
                  replace
                  to="/prodotti-fitosanitari/"
                >
                  Prodotti fitosanitari
                </Link>
              </li>
              <li>
                <Link
                  replace
                  rel="canonical noopener noreferrer"
                  className={classes.marginTop}
                  replace
                  to="/beni-e-servizi-acquistati-tramite-rdotd-sul-mepa/"
                >
                  Acquisti Mepa
                </Link>
              </li>
              <li>
                <a
                  className={classes.marginTop}
                  replace
                  target="_blank"
                  rel="canonical noopener noreferrer"
                  href="https://meteomont.carabinieri.it/stazioni-manuali"
                >
                  Meteomont Carabinieri
                </a>
              </li>
              <li>
                <Link
                  replace
                  rel="canonical noopener noreferrer"
                  to="/elenco-delle-aree-del-patrimonio-immobiliare-dello-stato-in-gestione-all-agenzia-del-demanio-sull-intero-territorio-nazionale/"
                >
                  Agenzia Del Demanio Abruzzo
                </Link>
              </li>
            </ul>
            <a href="https://www.buymeacoffee.com/Oa5oh3r" target="_blank">
              <script
                type="text/javascript"
                src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
                data-name="bmc-button"
                data-slug="Oa5oh3r"
                data-color="#FFDD00"
                data-emoji="☕"
                data-font="Cookie"
                data-text="Offrimi un caffe"
                data-outline-color="#000000"
                data-font-color="#000000"
                data-coffee-color="#ffffff"
              ></script>
            </a>
          </div>
          <div className="icons-logos">
            <a
              href="http://abruzzoturismo.it"
              rel="canonical noopener noreferrer"
              target="_blank"
            >
              <img
                width="115"
                height="70"
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
                height="70"
                src={acqualife}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
            <a href="http://www.regione.abruzzo.it/content/conti-pubblici-territoriali">
              <img
                width="115"
                height="70"
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
                height="70"
                src={opendata}
                alt="logo Abruzzo risorse turismo"
              />
            </a>
          </div>

          <span style={{ margin: "0 auto 3rem 0" }}>
            © {new Date().getFullYear()}, Fatto A Fraine Con
            <a
              target="_blank"
              rel="canonical noopener noreferrer"
              href="https://twitter.com/_vinny_92"
            >
              &nbsp;Gatsby
            </a>
          </span>
        </Container>
      </footer>
    </React.Fragment>
  )
}
