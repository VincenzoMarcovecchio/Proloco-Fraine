module.exports = {
  siteMetadata: {
    title: `Associazione proloco Fraine`,
    description: `L'Associazione proloco Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo...`,
    author: `https://vincenzo.codes`,
    siteUrl: `https://www.prolocofraine.org`,
    keywords: [
      "Abruzzo",
      "Fraine",
      "Italy",
      "Cucina",
      "Italiana",
      "Web",
      "app",
      "IO",
    ],
  },

  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        title: "Proloco Fraine",
        description:
          "L'Associazione proloco Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo...",
        openGraph: {
          type: "website",
          locale: "it_IT",
          url: "https://www.prolocofraine.org/",
          site_name: "Proloco Fraine",
        },
        images: [
          {
            url: "https://www.prolocofraine.org/images/iscrizioni-proloco.jpg",
            width: 1200,
            height: 630,
            alt: "Iscrizione alla proloco Fraine",
          },
        ],
        twitter: {
          handle: "Proloco Fraine",
          site: "https://www.prolocofraine.org/",
          cardType: "summary_large_image",
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development:
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=0121e101985943d88d6b3a5ac0817273", // on "gatsby develop"
          production:
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=0121e101985943d88d6b3a5ac0817273", // on "gatsby build"
        },
        rootKey: "articles",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `regioni`,
        path: `${__dirname}/src/data/emergenza-regioni.json`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Proloco Fraine`,
        short_name: `Fraine Loco`,
        start_url: `/`,
        background_color: `#3f51b5`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/proloco.jpg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl

              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        description
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Proloco Fraine RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-preact`,
  ],
}
