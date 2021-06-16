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
import Chatbot from "react-chatbot-kit"
import ActionProvider from "./bot/ActionProvider"
import MessageParser from "./bot/MessageParser"
import config from "./bot/config"
import useOnclickOutside from "react-cool-onclickoutside"

const Layout = ({ children }) => {
  const [Articles, setArticles] = useState([])
  const [openMenu, setOpenMenu] = useState(false)

  const ref = useOnclickOutside(() => {
    setOpenMenu(false)
  })

  const handleClickBtn = () => {
    setOpenMenu(!openMenu)
  }

  useMemo(() => {
    fetch(`https://prolocofraine.netlify.app/.netlify/functions/news`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData.articles)
      })
  })

  return (
    <>
      <Helmet>
        <script
          data-ad-client="ca-pub-7565213898571907"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="Oa5oh3r"
          data-color="#FFDD00"
          data-emoji="☕"
          data-font="Cookie"
          data-text="Offrimi un caffe"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
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
      <div className="butta">
        <button onClick={handleClickBtn}>Button</button>
        {openMenu && (
          <div ref={ref}>
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
