import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Job, { tJob } from './job';
import PageSection from './pageSection';

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
    console.log(data)

    return (
        <PageSection>
            <h2>Resume</h2>
            {data?.allContentfulJob?.edges?.map(({ node: job }: { node: tJob }) => (
                <Job data={job} key={job.id} />
            ))}
        </PageSection>
    )
}

export default Resume;
