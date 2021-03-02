import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ExternalLink from './externalLink'

type LinkQuery = {
    contentfulSiteContent: {
        links: string[]
    }
}

const Links = () => {
    const data: LinkQuery = useStaticQuery(graphql`
        query linksQuery {
            contentfulSiteContent {
                links
            }
        }
    `)

    if (!data?.contentfulSiteContent?.links?.length) return ''

    return (
        <ul className="flex">
            {data.contentfulSiteContent.links.map((link, index) => (
                <ExternalLink
                    key={index}
                    link={link}
                    className="font-thin capitalize mr-2.5 last:mr-0 border-b-2 border-dotted text-teal text-sm px-1">
                    <li>
                        {link.includes('mailto:') ?
                            'Email' :
                            link.match(/\/\/(www\.|)(\w+)\.com/)[2]
                        }
                    </li>
                </ExternalLink>
            ))}
        </ul>
    )
}

export default Links
