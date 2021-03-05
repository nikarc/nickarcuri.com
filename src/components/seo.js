/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
    const { contentfulSiteMetaData: site } = useStaticQuery(
        graphql`
        query metaDataQuery {
            contentfulSiteMetaData {
                image {
                    fixed {
                        src
                    }
                }
                description
                title
                titleTemplate
                url
            }
        }
        `
    )
    console.log('META: ', site)

    const metaDescription = site?.description || description
    const defaultTitle = site?.title || title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={defaultTitle}
            titleTemplate={`✌️ ${site?.titleTemplate}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: defaultTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}>
            <meta charSet="utf-8" />
            <title>{defaultTitle}</title>
            <link rel="canonical" href="https://nickarcuri.com" />
        </Helmet>
    )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
