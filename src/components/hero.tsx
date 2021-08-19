import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PageSection from "../components/pageSection"

const Hero = () => {
  const { contentfulSiteContent } = useStaticQuery(graphql`
    query heroQuery {
      contentfulSiteContent {
        elevatorPitch
      }
    }
  `)
  const { elevatorPitch } = contentfulSiteContent

  return (
    <PageSection>
      <p className="text-2xl sm:text-4xl text-center sm:text-left leading-normal tracking-wider font-extralight">
        {elevatorPitch || ""}
      </p>
    </PageSection>
  )
}

export default Hero
