import React, { useState, useEffect, memo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Fito from "../components/fitocomponent/Fito"
import InfiniteScroll from "react-infinite-scroll-component"
import ima from "../images/proteggere-lambiente.jpg"
var jsonData = require("../data/fito.json")

const useStyles = makeStyles({
  root: {
    width: "100%",
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      maxWidth: 345,
    },
  },
  container: {
    backgroundImage: `${ima}`,
    backgroundPosition: "center left",
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
  },
})

function FitoSanitari() {
  const classes = useStyles()
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  })
  const [prodotti, setProdotti] = useState(jsonData)

  const [hasMore, setHasMore] = useState(true)
  const [output, setOutput] = useState([])
  const [current, setCurrent] = useState(prodotti.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === prodotti.length) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      setCurrent(
        current.concat(prodotti.slice(count.prev + 10, count.next + 10))
      )
    }, 2000)
    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }))
  }

  return (
    <Layout>
      <SEO
        title="I prodotti Fitosanitari"
        image=""
        description="Il dataset contiene l'elenco completo dei Prodotti Fitosanitari autorizzati dal Ministero della Salute,"
        keywords="Dati relativi al prodotto fitosanitario : Numero Registrazione, Denominazione prodotto, Data Registrazione, Scadenza Autorizzazione, Indicazione di pericolo, Attività, Formulazione, Importazioni Parallele, Prodotti per Piante Ornamentali, Sostanze Attive contenute.
Dati relativi all'impresa titolare: Denominazione e Indirizzo della sede legale e amministrativa."
      />
      <section className="blog-post-container">
        <Container className={classes.container} maxWidth="sm">
          <img
            width="100%"
            src={ima}
            alt="segnali di pericolo chimico inquin amento"
          />
          <h1>Banca dati dei prodotti fitosanitari.</h1>

          <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            {current &&
              current.map((pro, index) => (
                <Fito
                  job={pro}
                  key={pro.id}
                  ATTIVITA={pro.ATTIVITA}
                  CAP_SEDE_AMMINISTRATIVA_IMPRESA={
                    pro.CAP_SEDE_AMMINISTRATIVA_IMPRESACAP_SEDE_AMMINISTRATIVA_IMPRESA
                  }
                  CAP_SEDE_LEGALE_IMPRESA={pro.CAP_SEDE_LEGALE_IMPRESA}
                  CITTA_SEDE_AMMINISTRATIVA_IMPRESA={
                    pro.CITTA_SEDE_AMMINISTRATIVA_IMPRESA
                  }
                  CITTA_SEDE_LEGALE_IMPRESA={pro.CITTA_SEDE_LEGALE_IMPRESA}
                  CODICE_FORMULAZIONE={pro.CODICE_FORMULAZIONE}
                  CONTENUTO_PER_100G_DI_PRODOTTO={pro.CODICE_FORMULAZIONE}
                  DATA_DECORRENZA_REVOCA={pro.DATA_DECORRENZA_REVOCA}
                  DATA_DECRETO_REVOCA={pro.DATA_DECRETO_REVOCA}
                  DATA_REGISTRAZIONE={pro.DATA_REGISTRAZIONE}
                  DESCRIZIONE_FORMULAZIONE={pro.DESCRIZIONE_FORMULAZIONE}
                  IMPRESA={pro.IMPRESA}
                  INDICAZIONI_DI_PERICOLO={pro.INDICAZIONI_DI_PERICOLO}
                  IP={pro.IP}
                  MOTIVO_DELLA_REVOCA={pro.MOTIVO_DELLA_REVOCA}
                  NUMERO_REGISTRAZIONE={pro.NUMERO_REGISTRAZIONE}
                  PPO={pro.PPO}
                  PRODOTTO={pro.PRODOTTO}
                  PROVINCIA_SEDE_AMMINISTRATIVA_IMPRESA={
                    pro.PROVINCIA_SEDE_AMMINISTRATIVA_IMPRESA
                  }
                  PROVINCIA_SEDE_LEGALE_IMPRESA={
                    pro.PROVINCIA_SEDE_LEGALE_IMPRESA
                  }
                  SCADENZA_AUTORIZZAZIONE={pro.SCADENZA_AUTORIZZAZIONE}
                  SEDE_AMMINISTRATIVA_IMPRESA={pro.SEDE_AMMINISTRATIVA_IMPRESA}
                  SEDE_LEGALE_IMPRESA={pro.SEDE_LEGALE_IMPRESA}
                  SOSTANZE_ATTIVE={pro.SOSTANZE_ATTIVE}
                  STATO_AMMINISTRATIVO={pro.STATO_AMMINISTRATIVO}
                />
              ))}{" "}
          </InfiniteScroll>
        </Container>
      </section>
    </Layout>
  )
}
export default memo(FitoSanitari)
