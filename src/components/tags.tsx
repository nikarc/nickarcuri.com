import React from 'react';
import Tag from './tag';

type Props = {
    tags: string[]
}

const Tags = ({ tags }: Props) => (
    <div className="my-4">
        {tags.map((tag, index) => (
            <Tag
                tagType={tag}
                key={index}>
                {tag}
            </Tag>
        ))}
    </div>
);

export default Tags;
