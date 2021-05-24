import React, { useState } from "react"
import "date-fns"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import CircularProgress from "@material-ui/core/CircularProgress"
import Paper from "@material-ui/core/Paper"
import flag from "../images/bandiera-italiana.jpg"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: flag,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  text: { zIndex: "10", padding: "1.4rem 1.6rem 1.4rem 0.8rem" },
  image: {
    position: "absolute",
    left: "0",
    top: "3.2rem",
    width: "100%",
    height: "35rem",
  },
}))

export default function Generatoredicodicefiscaleonline() {
  const classes = useStyles()
  const [error, setError] = useState({})
  const [code, setCode] = useState({})
  const [sending, setSending] = useState(false)
  const [state, setState] = useState({
    nome: null || "",
    cognome: null || "",
    sesso: null || "",
    datadinascita: null || "",
    cittadinascita: null || "",
    provincia: null || "",
  })

  const handleChange = event => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = () => {
    if (!state.nome) {
      alert("Inserisci il tuo nome")
    }

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      name: state.nome,
      surname: state.cognome,
      gender: state.sesso,
      day: Number(state.datadinascita.substring(8, 10)),
      month: Number(state.datadinascita.substring(5, 7)),
      year: Number(state.datadinascita.substring(0, 4)),
      city: state.cittadinascita,
      province: state.provincia.toUpperCase(),
    })
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    if (state.provincia) {
      setSending(true)

      fetch(
        "https://mimmofranco.herokuapp.com/https://apis.woptima.com/cf",
        requestOptions
      )
        .then(response => response.json())
        .then(result => (setCode(result), setSending(false)))
        .catch(error => alert(error))
    }
  }

  return (
    <>
      <GatsbySeo
        title="Proloco Fraine | Codice Fiscale Online"
        description="Generatore di codice fiscale online"
        canonical="https://www.prolocofraine.org/generatore-di-codice-fiscale-online"
        openGraph={{
          url:
            "https://www.prolocofraine.org/generatore-di-codice-fiscale-online",
          title: "Codice Fiscale Online",
          description: "Generatore di codice fiscale online",

          images: [
            {
              url: flag,
              width: 800,
              height: 600,
              alt: "bandiera italiana",
            },
            {
              url: flag,
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
      <Layout>
        <Container className={classes.root} maxWidth="sm">
          <img className={classes.image} src={flag} alt="italiana bandiera" />
          <h1 style={{ margin: "3rem auto", zIndex: "10" }}>
            Codice Fiscale Online
          </h1>
          <strong style={{ zIndex: "10" }}>
            Completa i campi sottostanti con i tuoi dati personali
          </strong>
          <Paper className={classes.text} elevation={3}>
            <TextField
              value={state.nome}
              onChange={handleChange}
              required
              id="nome"
              label="Il tuo nome"
              placeholder="Il tuo nome"
              multiline
              type="text"
            />
            <TextField
              required
              type="text"
              value={state.cognome}
              onChange={handleChange}
              id="cognome"
              label="Cognome"
              multiline
            />
            <FormControl style={{ width: "100%", margin: "8px" }}>
              <InputLabel id="sesso">Sesso</InputLabel>
              <Select
                native
                required
                labelId="sesso"
                id="sesso"
                value={state.sesso}
                style={{ width: "100%" }}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                <option aria-label="M" value="M">
                  M
                </option>
                <option aria-label="F" value="F">
                  F
                </option>
              </Select>
            </FormControl>
            <TextField
              required
              id="datadinascita"
              label="Data di nascita"
              onChange={handleChange}
              type="date"
              value={state.datadinascita}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              type="text"
              value={state.cittadinascita}
              onChange={handleChange}
              id="cittadinascita"
              label="Citta` di nascita"
              placeholder=""
              multiline
            />

            <FormControl style={{ width: "100%", margin: "8px" }}>
              <InputLabel id="provincia">Provincia</InputLabel>
              <Select
                required
                id="provincia"
                labelId="provincia"
                value={state.provincia}
                onChange={handleChange}
                native
              >
                <option value="ag">Agrigento</option>
                <option value="al">Alessandria</option>
                <option value="an">Ancona</option>
                <option value="ao">Aosta</option>
                <option value="ar">Arezzo</option>
                <option value="ap">Ascoli Piceno</option>
                <option value="at">Asti</option>
                <option value="av">Avellino</option>
                <option value="ba">Bari</option>
                <option value="bt">Barletta-Andria-Trani</option>
                <option value="bl">Belluno</option>
                <option value="bn">Benevento</option>
                <option value="bg">Bergamo</option>
                <option value="bi">Biella</option>
                <option value="bo">Bologna</option>
                <option value="bz">Bolzano</option>
                <option value="bs">Brescia</option>
                <option value="br">Brindisi</option>
                <option value="ca">Cagliari</option>
                <option value="cl">Caltanissetta</option>
                <option value="cb">Campobasso</option>
                <option value="ci">Carbonia-iglesias</option>
                <option value="ce">Caserta</option>
                <option value="ct">Catania</option>
                <option value="cz">Catanzaro</option>
                <option value="ch">Chieti</option>
                <option value="co">Como</option>
                <option value="cs">Cosenza</option>
                <option value="cr">Cremona</option>
                <option value="kr">Crotone</option>
                <option value="cn">Cuneo</option>
                <option value="en">Enna</option>
                <option value="fm">Fermo</option>
                <option value="fe">Ferrara</option>
                <option value="fi">Firenze</option>
                <option value="fg">Foggia</option>
                <option value="fc">Forl&igrave;-Cesena</option>
                <option value="fr">Frosinone</option>
                <option value="ge">Genova</option>
                <option value="go">Gorizia</option>
                <option value="gr">Grosseto</option>
                <option value="im">Imperia</option>
                <option value="is">Isernia</option>
                <option value="sp">La spezia</option>
                <option value="aq">L'aquila</option>
                <option value="lt">Latina</option>
                <option value="le">Lecce</option>
                <option value="lc">Lecco</option>
                <option value="li">Livorno</option>
                <option value="lo">Lodi</option>
                <option value="lu">Lucca</option>
                <option value="mc">Macerata</option>
                <option value="mn">Mantova</option>
                <option value="ms">Massa-Carrara</option>
                <option value="mt">Matera</option>
                <option value="vs">Medio Campidano</option>
                <option value="me">Messina</option>
                <option value="mi">Milano</option>
                <option value="mo">Modena</option>
                <option value="mb">Monza e della Brianza</option>
                <option value="na">Napoli</option>
                <option value="no">Novara</option>
                <option value="nu">Nuoro</option>
                <option value="og">Ogliastra</option>
                <option value="ot">Olbia-Tempio</option>
                <option value="or">Oristano</option>
                <option value="pd">Padova</option>
                <option value="pa">Palermo</option>
                <option value="pr">Parma</option>
                <option value="pv">Pavia</option>
                <option value="pg">Perugia</option>
                <option value="pu">Pesaro e Urbino</option>
                <option value="pe">Pescara</option>
                <option value="pc">Piacenza</option>
                <option value="pi">Pisa</option>
                <option value="pt">Pistoia</option>
                <option value="pn">Pordenone</option>
                <option value="pz">Potenza</option>
                <option value="po">Prato</option>
                <option value="rg">Ragusa</option>
                <option value="ra">Ravenna</option>
                <option value="rc">Reggio di Calabria</option>
                <option value="re">Reggio nell'Emilia</option>
                <option value="ri">Rieti</option>
                <option value="rn">Rimini</option>
                <option value="rm">Roma</option>
                <option value="ro">Rovigo</option>
                <option value="sa">Salerno</option>
                <option value="ss">Sassari</option>
                <option value="sv">Savona</option>
                <option value="si">Siena</option>
                <option value="sr">Siracusa</option>
                <option value="so">Sondrio</option>
                <option value="ta">Taranto</option>
                <option value="te">Teramo</option>
                <option value="tr">Terni</option>
                <option value="to">Torino</option>
                <option value="tp">Trapani</option>
                <option value="tn">Trento</option>
                <option value="tv">Treviso</option>
                <option value="ts">Trieste</option>
                <option value="ud">Udine</option>
                <option value="va">Varese</option>
                <option value="ve">Venezia</option>
                <option value="vb">Verbano-Cusio-Ossola</option>
                <option value="vc">Vercelli</option>
                <option value="vr">Verona</option>
                <option value="vv">Vibo valentia</option>
                <option value="vi">Vicenza</option>
                <option value="vt">Viterbo</option>
              </Select>
            </FormControl>
          </Paper>
          <Button
            style={{ margin: "1.5rem auto", width: "3rem", height: "3rem" }}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Invia
          </Button>
          {sending && <CircularProgress />}
          {error.length > 1 && <code>{error}</code>}
          {code.cf && <span className={classes.text}>{`${code.cf}🎉🎉`}</span>}
          <br></br>
          <br></br>
        </Container>
      </Layout>
    </>
  )
}
