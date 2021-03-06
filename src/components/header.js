import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headshot from './headshot'
import Links from './links'

const Header = ({ siteTitle }) => (
    <header className="flex items-center mt-10 mb-20">
        <Headshot />
        <h1 className="mr-auto text-2xl font-semibold tracking-widest uppercase">
            <Link to="/">
                {siteTitle}
            </Link>
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
