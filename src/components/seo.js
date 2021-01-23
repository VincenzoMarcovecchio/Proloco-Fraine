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

function SEO({ title, description, image, keywords, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: "it",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: `${metaDescription}`,
        },
        {
          property: `og:title`,
          content: `${title}`,
        },
        {
          property: `og:image`,
          content: `${image}`,
        },
        {
          property: `og:description`,
          content: `${metaDescription}`,
        },
        {
          property: `og:type`,
          content: `prolocofraine.org`,
        },
        {
          name: `twitter:card`,
          content: `large`,
        },
        {
          name: `twitter:image`,
          content: `${image}`,
        },
        {
          name: `twitter:creator`,
          content: `${site.siteMetadata.author}`,
        },
        {
          name: `twitter:title`,
          content: `${title}`,
        },
        {
          name: `twitter:description`,
          content: `${metaDescription}`,
        },
        {
          name: `keywords`,
          content: `${keywords}`,
        },
      ].concat(meta)}
    >
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
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `it`,
  meta: [],
  description: `L'Associazione PRO LOCO Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo...`,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  keywords: PropTypes.string,
}

export default SEO
