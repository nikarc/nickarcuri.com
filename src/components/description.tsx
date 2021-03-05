import React from 'react';
import BulletedList from './bulleted-list';

type Props = {
    data: string
}

const Description = ({ data }: Props) => {
    return (
        <BulletedList data={data.split('- ')} />
    )
}

export default Description;
