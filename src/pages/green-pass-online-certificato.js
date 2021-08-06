import React from "react"
import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import flag from "../images/abruzzo-logo.jpg"
const Green = () => {
    return (
      <Layout>
        <GatsbySeo
        title="Come ottenere il Covid Green Pass in Italia"
        description="La Certificazione verde COVID-19 permette di accedere a eventi, strutture e altri luoghi pubblici in Italia e facilita gli spostamenti in Europa."
        canonical="https://www.prolocofraine.org/green-pass-online-certificato"
        openGraph={{
          url:
            "https://www.prolocofraine.org/green-pass-online-certificato",
          title: "Come ottenere il Covid Green Pass in Italia",
          description:"La Certificazione verde COVID-19 permette di accedere a eventi, strutture e altri luoghi pubblici in Italia e facilita gli spostamenti in Europa."
          ,

          images: [
            {
              url: flag,
              width: 800,
              height: 600,
              alt: "certificato covid",
            },
            {
              url: flag,
              width: 900,
              height: 800,
              alt: "certificato covid",
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
       
        <center>
        
            <iframe
              style={{ width: "100%", height: "100vh" }}
              src="https://www.dgc.gov.it/web/"
            ></iframe>
 
        </center>
      </Layout>
    )
  }
  
  export default Green
  