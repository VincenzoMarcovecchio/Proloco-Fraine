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

  return (
    <>
      <script type="text/javascript">
        {`
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'acc14985cbfb77c1296445368c2919273aa6dfba');
`}
      </script>
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
