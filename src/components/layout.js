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
import Cookie from "../components/cookie/Cookie"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [Articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://prolocofraine.netlify.app/.netlify/functions/news`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  }, [])

  return (
    <>
      <Helmet>
        <script
          data-ad-client="ca-pub-7565213898571907"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>
      <Header />

      <main>{children}</main>
      <Cookie />
      <Footer />
      <div className="ticker-wrap">
        <div className="ticker">
          {Articles.map(article => (
            <div key={article.title} className="item">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  textRendering: " optimizeSpeed",
                }}
                target="_blank"
                href={article.url}
                rel="canonical noopener noreferrer "
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
