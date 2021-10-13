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
  const [openMenu, setOpenMenu] = useState(false)
  const [canRender, setCanRender] = useState(false)
  const [hasNavTag, setHasNavTag] = useState(false)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "it",
        }}
      ></Helmet>
      <Header />
      <main>{children}</main>
      <Cookie />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
