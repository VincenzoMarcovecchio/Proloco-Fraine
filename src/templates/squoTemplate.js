import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo, LocalBusinessJsonLd } from "gatsby-plugin-next-seo"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
const Strutto = ({ pageContext }) => {
  console.log(pageContext)

  let dis = pageContext.data
  let tiposquo = dis.cdes_tipo_scuola.replace(/\W+/g, "-")
  let lunom = dis.cdenominazione.replace(/\W+/g, "-")
  let tutto = `/${tiposquo}${lunom}/`
  let comune = dis.cistat_com
  let provincia = dis.cistat_prov
  let regione = dis.cistat_reg
  let denom = dis.cdenominazione
  let tipodisplay = dis.cdes_tipo_scuola.toLowerCase()
  let indirizzo = dis.cindirizzo
  let telefono = dis.ctelefono
  let fax = dis.cfax
  let email = dis.cemail
  let posce = dis.cpec
  let web = dis.csito_web
  let codice = dis.ccod_istituto_principale
  let costatale = dis.cstatale
  let cap = dis.ccap

  return (
    <>
      <LocalBusinessJsonLd
        type={`${tipodisplay}`}
        id={`https://www.prolocofraine.org/${tutto}`}
        name={`${tipodisplay} ${denom}`}
        description={`${tipodisplay} ${denom} - ${comune} 
  `}
        url={`https://www.prolocofraine.org/${tutto}`}
        telephone={`${telefono}`}
        address={{
          streetAddress: `${indirizzo}`,
          addressLocality: `${comune}`,
          addressRegion: `${regione}`,
          postalCode: `${cap}`,
          addressCountry: "IT",
        }}
        geo={{
          latitude: "",
          longitude: "",
        }}
        images={["https://www.regione.abruzzo.it/"]}
      />
      <GatsbySeo
        title={`${tipodisplay} ${denom} - ${comune} 
        `}
        description={`${tipodisplay} ${denom} - ${comune} 
        `}
        canonical={`https://www.prolocofraine.org/${tutto}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${tutto}`,
          title: `${tipodisplay} ${denom} - ${comune} 
          `,

          images: [
            {
              url: `https://www.regione.abruzzo.it/`,
              width: 800,
              height: 600,
              alt: "proloco fraine",
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

      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1" component="div" gutterBottom>
          {`${tipodisplay} ${denom}
  `}
        </Typography>
        <p style={{ textTransform: "capitalize" }}>{tipodisplay}</p>
        <p>
          {comune} | {provincia}
        </p>
        <p>
          <b>Indirizzo:&nbsp;</b>
          {indi}
        </p>
        <p>
          <b>Tel:&nbsp;</b>
          {telefono}
        </p>
        <p>
          <b>Email:&nbsp;</b>
          {email}
        </p>
        <p>
          <b>Posta elettronica certificata:&nbsp;</b>
          {posce}
        </p>
        <p>
          <b>Fax:&nbsp;</b>
          {fax}
        </p>
        <p>
          <b>Sito web:&nbsp;</b>
          {web}
        </p>
      </Box>
    </>
  )
}

export default Strutto
