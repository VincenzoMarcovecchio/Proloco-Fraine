import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const Bolla = async ({ pageContext }) => {
  console.log(pageContext)
  let luca = await pageContext.data.title.replace(/\s+/g, "-").toLowerCase()
  let vgv = await luca.replace(/\?/g, "-").toLowerCase()
  let dfd = await vgv.replace(/\#/g, "-").toLowerCase()

  return (
    <>
      <GatsbySeo
        title={pageContext.data.title}
        description={`${
          pageContext.data.full_description || pageContext.data.description
        }`}
        canonical={`https://www.prolocofraine.org/${dfd}`}
        openGraph={{
          url: `https://www.prolocofraine.org/${dfd}`,
          title: `${pageContext.data.title}`,
          description: `${
            pageContext.data.full_description || pageContext.data.description
          }`,
          images: [
            {
              url: `${pageContext.data.image_url}`,
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
        <article className="blog-post">
          {pageContext.data.image_url && (
            <img
              style={{ width: "100%", height: "65vh", objectFit: "cover" }}
              alt={pageContext.data.title}
              src={pageContext.data.image_url}
            />
          )}

          <Typography variant="h1" component="div" gutterBottom>
            {pageContext.data.title}
          </Typography>
          <div style={{ marginBottom: "2rem" }}>
            <Typography variant="subtitle1" gutterBottom component="div">
              <b>Autore:</b>&nbsp;{pageContext.data.creator || null}
            </Typography>
          </div>
          <time dateTime={pageContext.data.pubDate}></time>
          {pageContext.data.full_description ? (
            <Typography variant="body1" gutterBottom>
              {pageContext.data.full_description}
            </Typography>
          ) : (
            <Typography variant="body1" gutterBottom>
              {pageContext.data.description}
            </Typography>
          )}

          <Typography variant="overline" display="block" gutterBottom>
            Vedi articolo intero su&nbsp;
            <a href={pageContext.data.link} rel="canonical noopener noreferrer">
              {pageContext.data.source_id}
            </a>
          </Typography>
        </article>
      </Box>
    </>
  )
}
export default Bolla
