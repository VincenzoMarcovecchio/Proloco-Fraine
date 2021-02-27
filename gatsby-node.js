/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const parameterize = require("parameterize")

const createeEmergenzeError = "Could not create post pages"
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

  const regioneTemplate = path.resolve(`./src/templates/regioneTemplate.js`)

//   const { data, errors } = await graphql(`
//     query {
//       emergenzaRegioniJson {
//         datastore {
//           data {
//             Regione
//             Numero_nuclei_dl_34_2020_art_82
//             Numero_persone_coinvolte_dl_34_2020_art_82
//             Numero_nuclei_dl_104_2020_art_23
//             Numero_persone_coinvolte_dl_104_2020_art_23
//             Importo_medio_mensile_dl_34_2020_art_82
//             Importo_medio_mensile_dl_104_2020_art_23
//           }
//         }
//       }
//     }
//   `)

//   if (errors) throw errors

//   const { emergenze } = data || {}
//   if (!Array.isArray(emergenze)) {
//     throw new Error(`${createeEmergenzeError}: Invalid restaurants`)
//   }

//   emergenze.forEach(({ id, Regione }) => {
//     const slug = parameterize(Regione)
//     createPage({
//       path: `/${slug}/`,
//       component: regioneTemplate,
//       context: {
//         id,
//         slug,
//       },
//     })
  })
}
