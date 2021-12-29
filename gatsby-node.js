/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const strutto = require("./src/components/strutture.json")
const path = require("path")
const fetch = require("node-fetch")
const { createFilePath } = require(`gatsby-source-filesystem`)
const axios = require("axios").default
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
  const lastTemplate = path.resolve("src/templates/lastTemplate.js")
  const struttoTemplate = path.resolve("src/templates/struttoTemplate.js")
  const squoTemplate = path.resolve("src/templates/squoTemplate.js")
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

  resulto.data.articles.articles.forEach(({ description, url }, dato) => {
    const urla = new URL(url)
    const rel = urla
      .toString()
      .substring(urla.origin.length)
      .replace("#", "")
      .replace("?", "")

    createPage({
      path: `/${rel}/`,
      component: notiPage,
      context: {
        rela: rel,
        data: description,
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

      createPage({
        path: friendlySluga.substring(1, 150),
        component: lastTemplate,
        context: {
          data: dis,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }

  await strutto.forEach(async dis => {
    let luca = await dis[Object.keys(dis)[2]]

    createPage({
      path: `/${luca}/`,
      component: struttoTemplate,
      context: {
        data: dis,
      },
    })
  })

  let getJSON = uri => fetch(uri).then(response => response.json())

  const kof = await getJSON(
    `https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&country=it&page=1`
  )

  await kof.results.forEach(async kok => {
    let luca = await kok.title.replace(/\s+/g, "-").toLowerCase()
    let fabio = await luca.replace(/\?/g, "-")
    let lore = await fabio.replace(/\%/g, "-")

    await createPage({
      path: `/${lore}/`,
      component: nuoveNews,
      context: {
        data: kok,
      },
    })
  })

  try {
    const roof = await getJSON(
      `https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&country=it&page=2`
    )

    await roof.results.forEach(async kok => {
      let luca = await kok.title.replace(/\s+/g, "-").toLowerCase()
      let fabio = await luca.replace(/\?/g, "-")
      let lore = await fabio.replace(/\%/g, "-")

      await createPage({
        path: `/${lore}/`,
        component: nuoveNews,
        context: {
          data: kok,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }

  const cane = await getJSON(
    `https://newsdata.io/api/1/news?apikey=pub_27444837fea2a2e2cc240d2e4d3dcab923c4&country=it&page=3`
  )
  try {
    await cane.results.forEach(async kok => {
      let luca = await kok.title.replace(/\s+/g, "-").toLowerCase()
      let fabio = await luca.replace(/\?/g, "-")
      let lore = await fabio.replace(/\%/g, "-")

      await createPage({
        path: `/${lore}/`,
        component: nuoveNews,
        context: {
          data: kok,
        },
      })
    })
  } catch (e) {
    console.log(e)
  }

  await graphql(`
    {
      links {
        results
      }
    }
  `).then(res => {
    res.data.links.results.forEach(async kok => {
      let luca = await kok.split("/")[4]
      try {
        let rollot = await axios.get(
          `https://sheltered-meadow-66603.herokuapp.com/noti/${luca}`,
          {
            headers: {
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              " Accept-Encoding": "gzip, deflate, br",
              " Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
              " Host": "sheltered-meadow-66603.herokuapp.com",
              " Sec-Fetch-Dest": "document",
              " Sec-Fetch-Mode": "navigate",
              " Sec-Fetch-Site": "none",
              " Sec-Fetch-User": "?1",
              " Sec-GPC": 1,
              " Upgrade-Insecure-Requests": 1,
              " User-Agent":
                "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36",
            },
          }
        )

        await createPage({
          path: `/${luca}/`,
          component: abruNews,
          context: {
            data: rollot,
          },
        })
      } catch (err) {
        console.log(err)
      }
    })
  })
}
