module.exports = {
  siteMetadata: {
    title: `Associazione proloco Fraine`,
    description: `L'Associazione proloco Fraine ha come scopo l'organizzazione di eventi socio-culturali per l'intrattenimento di grandi e piccini, e non solo...`,
    author: `https://vincenzo.codes`,
    siteUrl: `https://www.prolocofraine.org`,
    keywords: [
      "Abruzzo",
      "risorse territorio",
      "made in italy",
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
    {
      resolve: `gatsby-plugin-netlify-identity-gotrue`,
      options: {
        url: `https://prolocofraine.org`,
      },
    },

    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },

    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "it_IT",
          url: "https://www.prolocofraine.org/",
          site_name: "Proloco Fraine",
        },

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
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=be0e85ab6c7c4d20ad402a0f216017c3", // on "gatsby develop"
          production:
            "https://newsapi.org/v2/top-headlines?country=it&apiKey=be0e85ab6c7c4d20ad402a0f216017c3", // on "gatsby build"
        },
        rootKey: "articles",
        schemas: {
          articles: `
                     author: String
                     title: String
                     description: String
                     url: String
                     urlToImage: String
                     publishedAt: String
                     content: String
                   
                    `,
        },
      },
    },

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://jobbio99.herokuapp.com/",
          production: "https://jobbio99.herokuapp.com/",
        },
        rootKey: "jobs",
      },
    },

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://leggi98.herokuapp.com/",
          production: "https://leggi98.herokuapp.com/", // on "gatsby build"
        },
        rootKey: "leggi",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pollolo.herokuapp.com/2",
          production: "https://pollolo.herokuapp.com/2", // on "gatsby build"
        },
        rootKey: "pollo2",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pollolo.herokuapp.com/1",
          production: "https://pollolo.herokuapp.com/1", // on "gatsby build"
        },
        rootKey: "pollo1",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://pollolo.herokuapp.com/docs",
          production: "https://pollolo.herokuapp.com/docs", // on "gatsby build"
        },
        rootKey: "pollodocs",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://leggi98.herokuapp.com/eventi",
          production: "https://leggi98.herokuapp.com/eventi", // on "gatsby build"
        },
        rootKey: "puppa",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://leggi98.herokuapp.com/altri",
          production: "https://leggi98.herokuapp.com/altri", // on "gatsby build"
        },
        rootKey: "hello",
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
        description: `Proloco Fraine informa `,
        short_name: `Fraine Loco`,
        start_url: `/`,
        background_color: `#3f51b5`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `./src/images/proloco.jpg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

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

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://www.prolocofraine.org/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
