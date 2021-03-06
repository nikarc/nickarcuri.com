import React from "react"
import { useStaticQuery, graphql } from "gatsby"

type HeadshotData = {
    contentfulSiteContent: {
        headshot: {
            sizes: {
                src: string
            }
        }
    }
}

const Headshot = () => {
    const data: HeadshotData = useStaticQuery(graphql`
      query headshotQuery {
          contentfulSiteContent {
              headshot {
                  sizes {
                      src
                  }
              }
          }
      }
  `)

    if (!data?.contentfulSiteContent?.headshot?.sizes?.src) return '';

    return (
        <img
            className="mr-10 border-4 rounded-full w-28 border-yellow"
            src={`https:${data.contentfulSiteContent.headshot.sizes.src}`} />
    )
}

export default Headshot
