/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { JsonLd } from "../components/JsonLd/JsonLd"

function SEO({ title, description, meta, image, pathname, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image ? image : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "it",
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://prolocofraine.org/${canonical}`} />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Proloco Fraine" />
        <meta itemprop="description" content={metaDescription} />
        <meta itemprop="image" content={image} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://reedbarger.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proloco Fraine" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reed" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Helmet>
      <JsonLd>
        {{
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          image: "http://prolocofraine.org/images/image.jpg",
          url: "http://prolocofraine.org",
          headline: metaDescription,
          alternativeHeadline: metaDescription,
          dateCreated: Date.now(),
          datePublished: Date.now(),
          dateModified: Date.now(),
          inLanguage: "it-IT",
          isFamilyFriendly: "true",
          copyrightYear: "2019",
          copyrightHolder: "ProlocoFraine",
          contentLocation: {
            "@type": "Place",
            name: "Fraine, CH",
          },
          accountablePerson: {
            "@type": "Person",
            name: "Proloco Fraine",
            url: "https://prolocofraine.org",
          },
          author: {
            "@type": "Person",
            name: "Proloco Fraine",
            url: "https://prolocofraine.org",
          },
          creator: {
            "@type": "Person",
            name: "Proloco Fraine",
            url: "https://prolocofraine.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Proloco Fraine",
            url: "https://prolocofraine.org",
            logo: {
              "@type": "ImageObject",
              url:
                "https://www.prolocofraine.org/images/Paese%20tipico%20Abruzzese.jpg",
              width: "400",
              height: "55",
            },
          },
          sponsor: {
            "@type": "Organization",
            name: "Proloco Fraine",
            url: "https://prolocofraine.org",
            logo: {
              "@type": "ImageObject",
              url:
                "https://www.prolocofraine.org/images/Paese%20tipico%20Abruzzese.jpg",
            },
          },
          mainEntityOfPage: "True",
          keywords: ["Abruzzo", "Italy", "Zona Locale", "Vasto", "Fraine"],
          genre: ["SEO", "JSON-LD"],
          articleSection: "Uncategorized posts",
          articleBody: metaDescription,
        }}
      </JsonLd>
    </>
  )
}

export default SEO
