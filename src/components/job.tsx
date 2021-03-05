import React from 'react';

import ExternalLink from './externalLink';
import Tenure from './tenure';
import Tags from './tags';
import Description from './description';

export type tJob = {
    id: string
    name: string
    title: string
    tags: string[]
    startDate: string
    endDate?: string
    location?: {
        lat: number
        lon: number
    }
    current: boolean
    description?: {
        description: string
    }
    link?: string
}

type iJob = {
    data: tJob
}

const Job = ({ data }: iJob) => {
    const {
        name,
        title,
        link,
        startDate,
        endDate,
        tags,
        description,
    } = data;

    return (
        <div className="my-12 first:mt-0">
            <h3>{title}</h3>
            <div>
                <ExternalLink link={link}>{name}</ExternalLink>
                <Tenure startDate={startDate} endDate={endDate} />
                <Tags tags={tags} />
                {description?.description?.length ? <Description data={description.description} /> : ''}
            </div>
        </div>
    )
};

export default Job;
