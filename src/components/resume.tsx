import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Job, { tJob } from "./job"
import PageSection from "./pageSection"
import HorizontalRule from "./horizontal-rule"

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

  if (!data?.allContentfulJob?.edges?.length) return ""
  const jobs: ContentFulEdges = data.allContentfulJob.edges

  const currentJob: ContentfulNode | void = jobs.find(
    ({ node: job }: { node: tJob }) => job.current
  )
  const otherJobs: { node: tJob }[] = jobs.filter(
    ({ node: job }: { node: tJob }) => !job.current
  )

  return (
    <PageSection>
      <h2 className="mb-4 text-center sm:text-left font-light tracking-widest uppercase text-teal-light">
        Resume
      </h2>
      {currentJob?.node ? <Job data={currentJob.node} /> : ""}
      <HorizontalRule />
      {otherJobs.map(({ node: job }, index) => (
        <React.Fragment key={index}>
          <Job data={job} />
          {index !== otherJobs.length - 1 && <HorizontalRule />}
        </React.Fragment>
      ))}
    </PageSection>
  )
}

export default Resume
