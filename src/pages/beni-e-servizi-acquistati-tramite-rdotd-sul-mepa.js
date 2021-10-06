import React, { useState, useEffect } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"
import proloco from "../images/proloco.jpg"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const Index = () => {
  const [Entrate, setEntrate] = useState([])
  const [loading, setLoading] = useState(true)
  const [spacing, setSpacing] = useState(2)
  const [sending, setSending] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(`https://mimmofranco.herokuapp.com/
https://dati.consip.it/api/action/datastore_search?resource_id=516f01ae-ec07-4b2a-8611-8e497767908e&q=abruzzo`)
      .then(response => response.json())
      .then(data => {
        if (!isCancelled) {
          setEntrate(data)
          setLoading(false)
        }
      })
    return () => {
      isCancelled = true
    }
  }, [])

  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  })

  return (
  <>
      <GatsbySeo
        title="Proloco Fraine | Beni e Servizi Acquistati Tramite RdO/TD sul MEPA 2020"
        description="Il dataset contiene informazioni di sintesi dei beni/servizi acquistati tramite RdO e Trattative dirette nell’ambito del Mepa. Consente di analizzare la spesa della PA in termini di: numero PA che hanno stipulato contratti, numero punti ordinanti, numero contratti stipulati, numero fornitori che hanno stipulato contratti. I dati sono aggregati rispetto alla tipologia e alla provincia dell’amministrazione che ha stipulato contratti, alla regione del fornitore che ha stipulato contratti, al bene/servizio acquistato, alla classificazione CPV del bene/servizio acquistato, al bando Mepa e alla relativa categoria di abilitazione su cui sono disponibili i beni/servizi acquistati, al tipo negoziazione (RdO/TD). Trattandosi di dati aggregati, non tutti gli indicatori sono additivi."
        canonical="https://www.prolocofraine.org/beni-e-servizi-acquistati-tramite-rdotd-sul-mepa/"
        openGraph={{
          url:
            "https://www.prolocofraine.org/beni-e-servizi-acquistati-tramite-rdotd-sul-mepa/",
          title:
            "Proloco Fraine | Beni e Servizi Acquistati Tramite RdO/TD sul MEPA 2020",
          description:
            "Il dataset contiene informazioni di sintesi dei beni/servizi acquistati tramite RdO e Trattative dirette nell’ambito del Mepa. Consente di analizzare la spesa della PA in termini di: numero PA che hanno stipulato contratti, numero punti ordinanti, numero contratti stipulati, numero fornitori che hanno stipulato contratti. I dati sono aggregati rispetto alla tipologia e alla provincia dell’amministrazione che ha stipulato contratti, alla regione del fornitore che ha stipulato contratti, al bene/servizio acquistato, alla classificazione CPV del bene/servizio acquistato, al bando Mepa e alla relativa categoria di abilitazione su cui sono disponibili i beni/servizi acquistati, al tipo negoziazione (RdO/TD). Trattandosi di dati aggregati, non tutti gli indicatori sono additivi.",

          images: [
            {
              url: proloco,
              width: 800,
              height: 600,
              alt: "bandiera italiana",
            },
            {
              url: proloco,
              width: 900,
              height: 800,
              alt: "bandiera italiana",
            },
          ],
          site_name: "Proloco Fraine",
        }}
        twitter={{
          handle: "Vincenzo Marcovecchio",
          site: "Proloco Fraine",
          cardType: "summary_large_image",
        }}
      />
      <Container className={classes.root}>
        <h1 style={{ marginTop: "2rem" }}>
          Beni e Servizi Acquistati Tramite RdO/TD sul MEPA 2020
        </h1>
        <h2>Ricerche per: Abruzzo 2020</h2>
        {loading && <h1>{"aspett..."}</h1>}
        <Grid container justify="center" spacing={spacing}>
          {Entrate?.result?.records.map(map => {
            return (
              <>
                <Grid item sm={12} md={6} lg={4}>
                  <Paper className={classes.paper}>
                    <p key={map.Codice_CPV}>
                      <strong>Bando Mepa:</strong> {map.Bando_Mepa}
                    </p>
                    <p>
                      <strong>Bene Servizio:</strong> {map.Bene_Servizio}
                    </p>
                    <p>
                      <strong> Bando Mepa:</strong> {map.Bando_Mepa}
                    </p>
                    <p>
                      <strong>Bando Servizio: </strong> {map.Bene_Servizio}
                    </p>
                    <p>Categoria Abilitazione: {map.Categoria_abilitazione}</p>
                    <p>Codice CPV: {map.Codice_CPV}</p>
                    <p>Descrizione CPV: {map.Descrizione_CPV}</p>
                    <p>N. Contratti Stipulati: {map.N_Contratti_Stipulati}</p>
                    <p>N. PA. Appaltanti: {map.N_PA_Appaltanti}</p>
                    <p>N. PO: {map.N_PO}</p>
                    <p>Provincia PA: {map.Provincia_PA}</p>
                    <p>Provincia Fornitore: {map.Provincia_Fornitore}</p>
                    <p>Regione PA: {map.Regione_PA}</p>
                    <p>Sigla Provincia PA: {map.Sigla_provincia_PA}</p>
                    <p>Tipo Negoziazione: {map.Tipo_Negoziazione}</p>
                    <p>
                      Tipologia Amministrazione: {map.Tipologia_Amministrazione}
                    </p>
                    <p>Rank: {map.rank}</p>
                    <p>Full Count: {map.full_count}</p>
                  </Paper>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Index
