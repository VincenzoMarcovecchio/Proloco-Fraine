/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [Articles, setArticles] = useState([])
  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=it&apiKey=0121e101985943d88d6b3a5ac0817273`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  }, [])

  return (
    <>
      <div className="banner">
        L' associazione Pro Loco Fraine supporta il movimento&nbsp;
        <a
          href="https://blacklivesmatter.com/"
          rel="noopener noreferrer canonical"
        >
          Black Lives Matter
        </a>
      </div>
      <Header />

      <main>{children}</main>

      <div className="ticker-wrap">
        <div className="ticker">
          {Articles.map(article => (
            <div key={article.url} className="item">
              &nbsp;{article.title}&nbsp;
            </div>
          ))}
        </div>
      </div>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
