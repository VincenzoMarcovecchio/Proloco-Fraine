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
  const notiPage = path.resolve("src/templates/noti-page.js")

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
    }
  `)

  const resulto = await graphql(`
    {
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

  resulto.data.articles.articles.forEach(
    ({ author, title, description, url, urlToImage, publishedAt, content }) => {
      const urla = new URL(url)
      const rel = urla.toString().substring(urla.origin.length)
      createPage({
        path: rel,
        component: notiPage,
        context: {
          rela: rel,
          data: description,
        },
      })
    }
  )
}
