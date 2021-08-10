/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useCallback, useMemo, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import Cookie from "../components/cookie/Cookie"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [Articles, setArticles] = useState([
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "la neve la sembre fatto" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "stetv a la cas" },
    { title: "la neve la sembre fatto" },
  ])
  const [openMenu, setOpenMenu] = useState(false)
  const [canRender, setCanRender] = useState(false)
  const [hasNavTag, setHasNavTag] = useState(false)

  return (
    <>
      <Helmet   htmlAttributes={{
    lang: 'it',
  }}>
        <script
          data-ad-client="ca-pub-7565213898571907"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        {console.clear() }
      </Helmet>
      <Header />
      <main>{children}</main>
      <Cookie />
      <Footer />
      <div className="ticker-wrap">
        <div className="ticker">
          {Articles.map((article, index) => {
            return (
              <div key={index} className="item">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textRendering: " optimizeSpeed",
                  }}
                  target="_blank"
                  href={"#"}
                  rel="canonical noopener noreferrer "
                >
                  {article.title}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
