/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
const Layout = ({ children }) => {
  const [Articles, setArticles] = useState([])
  useEffect(() => {
    fetch(`https://prolocofraine.netlify.app/.netlify/functions/news`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  }, [])
  const injectGA = () => {
    if (typeof window == "undefined") {
      return
    }
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", "G-B5GQKHBSDJ")
  }
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B5GQKHBSDJ"
      ></script>
      <script>{injectGA()}</script>
      <div className="banner">
        <span>supportiamo il movimento&nbsp;</span>
        <a
          href="https://blacklivesmatter.com/"
          rel="noopener noreferrer canonical"
        >
          #BLACKLIVESMATTER
        </a>
      </div>
      <Header />

      <main>{children}</main>
      <Footer />
      <div className="ticker-wrap">
        <div className="ticker">
          {Articles.map(article => (
            <div key={article.url} className="item">
              <a
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                href={article.url}
                rel="noopener noreferrer canonical"
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
