import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "2rem auto 2rem 0",
    padding: "1rem",
    "& > p": {
      textDecoration: "underline",
      display: "block",
      width: "100%",
    },
  },
}))
const Fito = ({
  CAP_SEDE_AMMINISTRATIVA_IMPRESA,

  CAP_SEDE_LEGALE_IMPRESA,
  CITTA_SEDE_AMMINISTRATIVA_IMPRESA,
  CITTA_SEDE_LEGALE_IMPRESA,
  CODICE_FORMULAZIONE,
  CONTENUTO_PER_100G_DI_PRODOTTO,
  DATA_DECORRENZA_REVOCA,
  DATA_DECRETO_REVOCA,
  DATA_REGISTRAZIONE,
  DESCRIZIONE_FORMULAZIONE,
  IMPRESA,
  INDICAZIONI_DI_PERICOLO,
  IP,
  MOTIVO_DELLA_REVOCA,
  NUMERO_REGISTRAZIONE,
  PPO,
  PRODOTTO,
  PROVINCIA_SEDE_AMMINISTRATIVA_IMPRESA,
  PROVINCIA_SEDE_LEGALE_IMPRESA,
  SCADENZA_AUTORIZZAZIONE,
  SEDE_AMMINISTRATIVA_IMPRESA,
  SEDE_LEGALE_IMPRESA,
  SOSTANZE_ATTIVE,
  STATO_AMMINISTRATIVO,
}) => {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.root}>
      <p>
        Provincia sede amministrativa impresa:&nbsp;
        {PROVINCIA_SEDE_AMMINISTRATIVA_IMPRESA}
      </p>
      <p>Stato Amministrativo:&nbsp;{STATO_AMMINISTRATIVO}</p>
      <p>Sede legale impresa:&nbsp;{SEDE_LEGALE_IMPRESA}</p>
      <p>Provincia sede legale impresa:&nbsp;{PROVINCIA_SEDE_LEGALE_IMPRESA}</p>
      <p>Cap sede amministrativa:&nbsp;{CAP_SEDE_AMMINISTRATIVA_IMPRESA}</p>
      <p>Cap sede legale impresa:&nbsp;{CAP_SEDE_LEGALE_IMPRESA}</p>
      <p>
        Citta sede amministrativa impresa:&nbsp;
        {CITTA_SEDE_AMMINISTRATIVA_IMPRESA}
      </p>
      <p>Sede amministrativa impresa:&nbsp;{SEDE_AMMINISTRATIVA_IMPRESA}</p>
      <p>Impresa:&nbsp;{IMPRESA}</p>
      <p>Citta sede legale impresa:&nbsp;{CITTA_SEDE_LEGALE_IMPRESA}</p>
      <p>Codice formulazione:&nbsp;{CODICE_FORMULAZIONE}</p>
      <p>
        Contenuto per 100g di prodotto: &nbsp;{CONTENUTO_PER_100G_DI_PRODOTTO}
      </p>

      <p>
        <mark>
          <em>Descrizione formulazione:&nbsp;{DESCRIZIONE_FORMULAZIONE}</em>
        </mark>
      </p>

      <p>
        <mark>
          <em>Prodotto:&nbsp;{PRODOTTO}</em>
        </mark>
      </p>

      <p>
        <mark>
          <em>Sotanze attive:&nbsp;{SOSTANZE_ATTIVE}</em>
        </mark>
      </p>

      <p>Data registrazione:&nbsp;{DATA_REGISTRAZIONE}</p>
      <p>Data decreto revoca:&nbsp;{DATA_DECRETO_REVOCA}</p>
      <p>Data registrazione:&nbsp;{DATA_REGISTRAZIONE}</p>
      <p>Data decorrenza revoca:&nbsp;{DATA_DECORRENZA_REVOCA}</p>
      <p>Motivo della revoca:&nbsp; {MOTIVO_DELLA_REVOCA}</p>
      <p>Numero registrazione:&nbsp;{NUMERO_REGISTRAZIONE}</p>
      <p>PPO {PPO}</p>

      <p>Scadenza Autorizzazione:&nbsp;{SCADENZA_AUTORIZZAZIONE}</p>

      <p>Indicazioni di pericolo:&nbsp;{INDICAZIONI_DI_PERICOLO}</p>
      <p>IP:&nbsp;{IP}</p>
    </Paper>
  )
}

export default Fito
