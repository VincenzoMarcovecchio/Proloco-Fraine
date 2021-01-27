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
function SEO({ description, meta, image: metaImage, title, pathname }) {
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
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "it",
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        link={
          canonical
            ? [
                {
                  rel: "canonical",
                  href: canonical,
                },
              ]
            : []
        }
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: "keywords",
            content: site.siteMetadata.keywords.join(","),
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]
          .concat(
            metaImage
              ? [
                  {
                    property: "og:image",
                    content: image,
                  },
                  {
                    property: "og:image:width",
                    content: metaImage.width,
                  },
                  {
                    property: "og:image:height",
                    content: metaImage.height,
                  },
                  {
                    name: "twitter:card",
                    content: "summary_large_image",
                  },
                ]
              : [
                  {
                    name: "twitter:card",
                    content: "summary",
                  },
                ]
          )
          .concat(meta)}
      >
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
SEO.defaultProps = {
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
