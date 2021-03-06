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

function SEO({ title, description, keywords, image, pathname }) {
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

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "it",
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://prolocofraine.org/${pathname}`} />
        <meta name="keywords" content={keywords}></meta>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content="https://prolocofraine.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proloco Fraine" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://www.prolocofraine.org${image}`}
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proloco Fraine" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://www.prolocofraine.org${image}`}
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Proloco Fraine" />
        <meta itemprop="description" content={description} />
        <meta
          itemprop="image"
          content={`https://www.prolocofraine.org${image}`}
        />{" "}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta property="fb:app_id" content="407785027087673" />
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
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}
export default SEO
