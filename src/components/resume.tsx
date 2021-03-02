import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Job, { tJob } from './job';
import PageSection from './pageSection';

type ContentfulNode = {
    node: tJob
}
type ContentFulEdges = ContentfulNode[]

const Resume = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulJob {
                edges {
                    node {
                        id
                        title
                        description {
                            description
                        }
                        tags
                        startDate
                        name
                        endDate
                        current
                        link
                    }
                }
            }
        }
    `)

    if (!data?.allContentfulJob?.edges?.length) return '';
    const jobs: ContentFulEdges = data.allContentfulJob.edges;

    const currentJob: ContentfulNode | void = jobs.find(({ node: job }: { node: tJob }) => job.current);
    const otherJobs: { node: tJob }[] = jobs.filter(({ node: job }: { node: tJob }) => !job.current);

    return (
        <PageSection>
            <h2>Resume</h2>
            {currentJob?.node ? <Job data={currentJob.node} /> : ''}
            {otherJobs.map(({ node: job }, index) => (
                <Job
                    data={job}
                    key={index} />
            ))}
        </PageSection>
    )
}

export default Resume;
