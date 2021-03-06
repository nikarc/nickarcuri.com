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

const backgroundSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23182f3b' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        contentfulSiteContent {
            siteName
            id
        }
    }`)

    return (
        <div
            style={{
                backgroundColor: '#141729',
                backgroundImage: `url(${backgroundSVG})`
            }}
            className="container mx-auto font-sans tracking-wide">
            <Header siteTitle={data.contentfulSiteContent.siteName || `Title`} />
            <main>{children}</main>
            <footer className="mt-32 mb-8 text-center">
                <p><span role="img" aria-label="Man working at computer">👨‍💻</span></p>
                <small>© {new Date().getFullYear()} nickarcuri.com</small>
            </footer>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
