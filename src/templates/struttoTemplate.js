import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo, LocalBusinessJsonLd } from "gatsby-plugin-next-seo"

const Strutto = ({ pageContext }) => {
  let strutte = pageContext.data
  let title = strutte[Object.keys(strutte)[2]]
  let email = strutte[Object.keys(strutte)[11]]
  let sito = strutte[Object.keys(strutte)[13]]
  let stelle = strutte[Object.keys(strutte)[3]]
  let where = strutte[Object.keys(strutte)[5]]

  let tel = strutte[Object.keys(strutte)[9]]
  let indi = strutte[Object.keys(strutte)[7]]
  let provi = strutte[Object.keys(strutte)[4]]
  let posco = strutte[Object.keys(strutte)[7]]
  let tipostrutta = strutte[Object.keys(strutte)[1]]

  typeof window !== "undefined" &&
    window.addEventListener("load", function () {
      let iDiv = document.getElementById("iframe1")

      iDiv.src = `https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=it&amp;q=${title}%20${where}%20${stelle}&amp;t=&amp;z=14&amp;it=UTF8&amp;iwloc=B&amp;output=embed`
    })
  return (
    <>
      <LocalBusinessJsonLd
        type={`${tipostrutta}`}
        id={`https://www.prolocofraine.org/${title}`}
        name={`${title}`}
        description={`${title} - ${where} - ${stelle} 
  `}
        url={`https://www.prolocofraine.org/${title}`}
        telephone={`${tel}`}
        address={{
          streetAddress: `${indi}`,
          addressLocality: `${where}`,
          addressRegion: `${provi}`,
          postalCode: `${posco}`,
          addressCountry: "IT",
        }}
        geo={{
          latitude: "",
          longitude: "",
        }}
        images={["https://prolocofraine.org/images/nocche-fritte"]}
      />
      <GatsbySeo
        title={title}
        description={`${title} - ${where} - ${stelle} 
  `}
        canonical={`https://www.prolocofraine.org/${title}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${title}`,
          title: `${title}`,
          description: `${title} - ${where} - ${stelle} `,
          images: [
            {
              url: ``,
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

      <Container style={{ marginTop: "3rem" }} maxWidth="sm">
        <h1>{title}</h1>
        <p style={{ textTransform: "capitalize" }}>{tipostrutta}</p>
        <p>
          {where} | {stelle}
        </p>
        <p>
          <b>Indirizzo:&nbsp;</b>
          {indi}
        </p>
        <p>
          <b>Telefono:&nbsp;</b>
          {tel}
        </p>
        <p>
          <b>Email:&nbsp;</b>
          {email}
        </p>
        <p>
          <b>Web:&nbsp;</b>
          {sito}
        </p>
        <small style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          OPEN DATA REGIONE ABRUZZO GENNAIO 2021
        </small>
 
          <iframe width="100%" 
          height="600" 
          id="iframe1"
          frameBorder="0"
           scrolling="no" marginHeight="0" marginWidth="0" 
          />
         
      </Container>
    </>
  )
}

export default Strutto
