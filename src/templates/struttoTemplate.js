import React from "react"
import Container from "@material-ui/core/Container"
import { GatsbySeo, LocalBusinessJsonLd } from "gatsby-plugin-next-seo"

const Strutto = ({ pageContext }) => {
  console.log(pageContext)

  let strutte = pageContext.data
  let title = strutte[Object.keys(strutte)[2]]

  let stelle = strutte[Object.keys(strutte)[3]]
  let where = strutte[Object.keys(strutte)[5]]

  let tel = strutte[Object.keys(strutte)[6]]
  let indi = strutte[Object.keys(strutte)[8]]
  let provi = strutte[Object.keys(strutte)[4]]
  let posco = strutte[Object.keys(strutte)[7]]
  let tipostrutta = strutte[Object.keys(strutte)[1]].toLowerCase()

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
        <p>{where}</p>
      </Container>
    </>
  )
}

export default Strutto
