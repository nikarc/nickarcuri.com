/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        contentfulSiteContent {
            siteName
            id
        }
    }`)

    return (
        <>
            <div className="container mx-auto font-sans">
                <Header siteTitle={data.contentfulSiteContent.siteName || `Title`} />
                <main>{children}</main>
                <footer className="mt-32 mb-8 text-center">
                    <p><span role="img" aria-label="Man working at computer">👨‍💻</span></p>
                    <small>© {new Date().getFullYear()} {window.location.origin}</small>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
