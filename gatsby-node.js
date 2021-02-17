/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const categoryPage = path.resolve("src/templates/category.js")
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

  if (page.path === "/covid-19" || page.path === "/covid-19/") {
    const { createPage, deletePage } = actions
    deletePage(page)
    async function fetchCovid() {
      try {
        const response = await fetch(
          `https://mimmofranco.herokuapp.com/https://covid19italiahelp.herokuapp.com/reports/`
        )
        const data = await response.json()
        return data
      } catch (error) {
        console.error(error)
      }
    }
    const coffeeShops = await fetchCovid()
    createPage({
      ...page,
      context: {
        ...page.context,
        coffeeShops,
      },
    })
  }
}
