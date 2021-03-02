import React from 'react';

type Props = {
    data: {
        description: string
    }
}

const Description = ({ data }: Props) => {
    if (!data?.description) return '';

    return (
        <ul>
            {data.description.split('- ').map((d, index) => (
                <li key={index}>{d.trim()}</li>
            ))}
        </ul>
    )
}

export default Description;
