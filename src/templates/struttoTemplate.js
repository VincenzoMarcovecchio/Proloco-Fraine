import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo, LocalBusinessJsonLd } from "gatsby-plugin-next-seo"

const Strutto = ({ pageContext }) => {
  let strutte = pageContext.data
  console.log(pageContext)
  let path = pageContext.giggi
  let title = strutte[Object.keys(strutte)[2]]
  let email = strutte[Object.keys(strutte)[11]]
  let sito = strutte[Object.keys(strutte)[13]]
  let stelle = strutte[Object.keys(strutte)[3]]
  let where = strutte[Object.keys(strutte)[5]]

  let tel = strutte[Object.keys(strutte)[9]]
  let indi = strutte[Object.keys(strutte)[6]]
  let provi = strutte[Object.keys(strutte)[4]]
  let posco = strutte[Object.keys(strutte)[7]]
  let tipostrutta = strutte[Object.keys(strutte)[1]]

  return (
    <>
 
      <GatsbySeo
        title={title}
        description={`${title} - ${where} - ${stelle} 
  `}
        canonical={`https://www.prolocofraine.org/${path}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${path}`,
          title: `${title}`,
          description: `${title} - ${where} - ${stelle} `,
          images: [
            {
              url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAmJeiVbpL8Xd6WT_UZ8afZa0783vgzV8Jg&usqp=CAU`,
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
     <LocalBusinessJsonLd
        type={`${tipostrutta}`}
        id={`https://www.prolocofraine.org/${path}`}
        name={`${title}  ${where} `}
        description={`${title} - ${where} - ${stelle} 
  `}
        url={`https://www.prolocofraine.org/${path}`}
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
        images={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAmJeiVbpL8Xd6WT_UZ8afZa0783vgzV8Jg&usqp=CAU"}
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

        <iframe
          width="100%"
          height="600"
          id="iframe1"
          frameBorder="0"
          src={`https://maps.google.com/maps/embed/v1/place?key=AIzaSyDrK_Ro5O8dkIdQP1zVaCOJh15QUmm10wQ&q=${title} ${where} ${stelle} `}
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="posizione geografica"
        />
      </Container>
    </>
  )
}

export default Strutto
