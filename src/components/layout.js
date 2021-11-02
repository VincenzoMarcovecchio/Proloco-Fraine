/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import AuthOverlay from "./AuthOverlay"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import Cookie from "../components/cookie/Cookie"
import { Helmet } from "react-helmet"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { Link } from "gatsby"

const Layout = ({ children }) => {
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
