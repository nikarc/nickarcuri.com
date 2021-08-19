import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headshot from "./headshot"
import Links from "./links"

const Header = ({ siteTitle }) => (
  <header className="flex items-center mt-10 sm:mb-20 flex-col sm:flex-row">
    <Headshot />
    <h1 className="mt-6 mb-4 text-2xl font-semibold tracking-widest uppercase sm:my-0 sm:mr-auto">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Links />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
