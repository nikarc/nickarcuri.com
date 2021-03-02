import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PageSection from '../components/pageSection'

const Hero = () => {
    const { contentfulSiteContent } = useStaticQuery(graphql`
    query heroQuery {
        contentfulSiteContent {
            elevatorPitch
        }
    }`)
    const { elevatorPitch } = contentfulSiteContent;

    return (
        <PageSection>
            <p className="text-4xl leading-normal tracking-wider font-extralight">{elevatorPitch || ''}</p>
        </PageSection>
    )
}

export default Hero;
