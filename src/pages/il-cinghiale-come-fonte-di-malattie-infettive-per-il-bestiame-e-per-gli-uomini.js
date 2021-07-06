import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Cinghiali = () => {
  return (
    <Layout>
      <SEO
        title="Il cinghiale come fonte di malattie
infettive per il bestiame e
per gli uomini"
        description="Il cinghiale come fonte di malattie
infettive per il bestiame e
per gli uomini..."
      />
      <center>
        <object
          style={{ width: "100%", height: "100vh" }}
          data="https://www.info.asl2abruzzo.it/files/151123_cinghiali_relazione.pdf"
          type="application/pdf"
        >
          <iframe
            style={{ width: "100%", height: "100vh" }}
            src="https://www.info.asl2abruzzo.it/files/151123_cinghiali_relazione.pdf"
          ></iframe>
        </object>
      </center>
    </Layout>
  )
}

export default Cinghiali
