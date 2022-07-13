import React from "react"
import Tag from "./tag"

type Props = {
  tags: string[]
}

const Tags = ({ tags }: Props) => (
  <div className="my-4 flex flex-wrap justify-center sm:justify-start">
    {tags.map((tag, index) => (
      <Tag tagType={tag} key={index}>
        {tag}
      </Tag>
    ))}
  </div>
)

export default Tags
