/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const parameterize = require("parameterize")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const categoryPage = path.resolve("src/templates/category.js")
  const leggiPage = path.resolve("src/templates/decreti-legge.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              category
            }
          }
        }
      }

      leggi {
        results {
          title
          quotes {
             ... 
            }
        }
      }
     
      puppa {
        results {
          corpo
        }
      }
      hello {
        results {
          rollo
        }
      }
      articles {
        articles {
          author
          title
          description
          url
          urlToImage
          publishedAt
          content
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // Create category pages
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.leggi.results.quotes.forEach(({ href }) => {
    const url = new URL(href);
    const rel = url.toString().substring(url.origin.length)
    createPage({
      path: rel,
      component: leggiPage,
      context: {

        data: href
      },
    })
  })
  result.data.articles.articles.forEach(({      author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content }) => {
    const ll = new URL(url);
    const rel = ll.toString().substring(url.origin.length)
    createPage({
      path: rel,
      component: leggiPage,
      context: {

        data: description
      },
    })
  })
  // Create category pages
  createPage({
    path: "/ultimi-decreti-legge-esaminati-del-parlamento-italiano",
    component: leggiPage,
    context: {
      data: result.data.leggi.results.title,
    },
  })
}
