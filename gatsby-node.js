/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const strutto = require("./src/components/strutture.json")
const sample = require("./src/data/sample.json")
const path = require("path")
const fetch = require("node-fetch")
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
  const notiPage = path.resolve("src/templates/noti-page.js")
  const lastTemplate = path.resolve("src/templates/lastTemplate.js")
  const struttoTemplate = path.resolve("src/templates/struttoTemplate.js")
  const abruNews = path.resolve("src/templates/abruNews.js")
  const nuoveNews = path.resolve("src/templates/nuoveNews.js")

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

  const resultoAbruzzo = await graphql(`
    {
      abruzzonews {
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
  resultoAbruzzo.data.abruzzonews.articles.forEach(dato => {
    const urla = new URL(dato.url)
    const cazzo = urla.toString().substring(29)
    const rel = cazzo.replace("#", "").replace("?", "")

    createPage({
      path: `/${rel}/`,
      component: notiPage,
      context: {
        rela: rel,
        data: dato.description,
        duto: dato,
      },
    })
  })
  const resultoAgri = await graphql(`
    {
      agri {
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
  resultoAgri.data.agri.articles.forEach(dato => {
    const urla = new URL(dato.url)
    const cazzo = urla.toString().substring(29)
    const rel = cazzo.replace("#", "").replace("?", "")

    createPage({
      path: `/${rel}/`,
      component: notiPage,
      context: {
        rela: rel,
        data: dato.description,
        duto: dato,
      },
    })
  })

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

  resulto.data.articles.articles.forEach(dato => {
    const urla = new URL(dato.url)
    const cazzo = urla.toString().substring(29)
    const rel = cazzo.replace("#", "").replace("?", "")

    createPage({
      path: `/${rel}/`,
      component: notiPage,
      context: {
        rela: rel,
        data: dato.description,
        duto: dato,
      },
    })
  })

  try {
    const discussions = await fetch(
      "http://dati.camera.it/sparql?query=%23%23%23%23+ultime+100+discussioni+in+organi+ed+aula%0D%0A%0D%0Aselect+distinct+%3Fseduta+%3FdataSeduta+%3FinDiscussione++%3Fcommissione+%3Faula+%3Fresoconto+where+%7B%0D%0A++%3Fseduta+a+ocd%3Aseduta%3B+ocd%3Arif_leg+%3Chttp%3A%2F%2Fdati.camera.it%2Focd%2Flegislatura.rdf%2Frepubblica_18%3E%3B+dc%3Adate+%3FdataSeduta.%0D%0A++%3Fdiscussione+a+ocd%3Adiscussione%3B+ocd%3Arif_seduta+%3Fseduta%3B+dc%3Atitle+%3FinDiscussione.%0D%0A++OPTIONAL%7B%3Fseduta+ocd%3Arif_organo+%3Forgano.+%3Forgano+dc%3Atitle+%3Fcommissione%7D%0D%0A++OPTIONAL%7B%3Fseduta+ocd%3Arif_assemblea+%3Fassemblea.+BIND%28%22Aula%22+AS+%3Faula%29%7D%0D%0A++OPTIONAL%7B%3Fseduta+dc%3Arelation+%3Fresoconto.+FILTER%28REGEX%28STR%28%3Fresoconto%29%2C%27pdf%27%29%29%7D%0D%0A%0D%0A%7D+ORDER+BY+DESC%28%3FdataSeduta%29+LIMIT+100+%0D%0A+%0D%0A%09%09%0D%0A%09&debug=on&default-graph-uri=&format=application%2Fsparql-results%2Bjson"
    )

    let jsona = await discussions.json()

    function removeExtension(filename) {
      var lastDotPosition = filename.lastIndexOf(".json")
      if (lastDotPosition === -1) return filename
      else return filename.substr(0, lastDotPosition)
    }

    await jsona.results.bindings.forEach(async dis => {
      let friendlySlug = await removeExtension(dis.inDiscussione.value)
      let friendlySluga = await friendlySlug.replace(/\W+/g, "-")
      let ciao = await friendlySluga.substring(1, 150)

      await createPage({
        path: ciao,
        component: lastTemplate,
        context: {
          data: dis,
          ciaos: ciao,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }

  await strutto.forEach(async dis => {
    let luca = await dis[Object.keys(dis)[2]]
    let franco = await luca.toString().toLowerCase()
    let giggio = await franco.replace(/\s+/g, "-")

    await createPage({
      path: `/${giggio}/`,
      component: struttoTemplate,
      context: {
        data: dis,
      },
    })
  })

  // await sample.forEach(async dis => {
  //   let luca = await dis.title
  //   let franco = await luca.toString().toLowerCase()
  //   let giggio = await franco.replace(/\s+/g, "-")
  //   createPage({
  //     path: `/${giggio}/`,
  //     component: nuoveNews,
  //     context: {
  //       data: dis,
  //     },
  //   })
  // })

  // try {
  //   const nova = await graphql(`
  //     {
  //       news {
  //         results {
  //           ...
  //         }
  //       }
  //     }
  //   `)

  //   await nova.results.forEach(async kok => {
  //     let luca = await kok.link.substring(30)

  //     await createPage({
  //       path: `/${luca}`,
  //       component: nuoveNews,
  //       context: {
  //         data: kok,
  //       },
  //     })
  //   })
  // } catch (e) {
  //   console.log(e)
  // }

  // try {
  //   let getJSON = uri => fetch(uri).then(response => response.json())

  //   const roof = await getJSON(
  //     `https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&q=covid`
  //   )

  //   await roof.results.forEach(async kok => {
  //     let luca = await kok.link.substring(30)

  //     await createPage({
  //       path: `/${luca}/`,
  //       component: nuoveNews,
  //       context: {
  //         data: kok,
  //       },
  //     })
  //   })
  // } catch (e) {
  //   console.log(e)
  // }

  
  try {
    let getJSON = uri => fetch(uri).then(response => response.json())

    const roof = await getJSON(
      `https://newsdata.io/api/1/news?apikey=pub_34650b5bc097af8addc0ee5589e2d8fe711f&q=natura&page=1`
    )

    await roof.results.forEach(async kok => {
      let luca = await kok.link.substring(30)

      await createPage({
        path: `/${luca}`,
        component: nuoveNews,
        context: {
          data: kok,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }

  // try {
  //   let getJSON = uri => fetch(uri).then(response => response.json())

  //   const cane = await getJSON(
  //     `https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&q=cucina&page=1`
  //   )

  //   await cane.results.forEach(async kok => {
  //     let luca = await kok.link.substring(30)

  //     await createPage({
  //       path: `/${luca}/`,
  //       component: nuoveNews,
  //       context: {
  //         data: kok,
  //       },
  //     })
  //   })
  // } catch (e) {
  //   console.log(e)
  // }

  const larot = await graphql(`
    {
      secondo {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < larot.data.secondo.results.length; i++) {
    try {
      let figa = await larot.data.secondo.results.links[i].split("/")[4]

      let cazzo = await fetch(
        `https://sheltered-meadow-66603.herokuapp.com/noti/${figa}`
      )

      let culo = await cazzo.text()

      const pino = await JSON.parse(culo)

      await createPage({
        path: `/${figa}`,
        component: abruNews,
        context: {
          data: pino,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
  const itiuno = await graphql(`
    {
      itiuno {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < itiuno.data.itiuno.results.length; i++) {
    try {
      let figa = await itiuno.data.itiuno.results.links[i].split("/")[4]

      let cazzo = await fetch(
        `https://pacific-fjord-73395.herokuapp.com/iti/${figa}`
      )

      let culo = await cazzo.text()

      const pino = await JSON.parse(culo)

      await createPage({
        path: `/${figa}`,
        component: abruNews,
        context: {
          data: pino,
          figa: figa,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const itidue = await graphql(`
    {
      itidue {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < itidue.data.itidue.results.length; i++) {
    try {
      let figa = await itidue.data.itidue.results.links[i].split("/")[4]

      let cazzo = await fetch(
        `https://pacific-fjord-73395.herokuapp.com/iti/${figa}`
      )

      let culo = await cazzo.text()

      const pino = await JSON.parse(culo)

      await createPage({
        path: `/${figa}`,
        component: abruNews,
        context: {
          data: pino,
          figa: figa,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const laro = await graphql(`
    {
      links {
        results {
          links
        }
      }
    }
  `)

  for (let i = 0; i < laro.data.links.results.links.length; i++) {
    try {
      let luca = await laro.data.links.results.links[i].split("/")[4]

      let rollot = await fetch(
        `https://sheltered-meadow-66603.herokuapp.com/noti/${luca}`
      )

      let gigi = await rollot.text()

      const son = await JSON.parse(gigi)

      await createPage({
        path: `/${luca}`,
        component: abruNews,
        context: {
          data: son,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
