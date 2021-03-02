import React from 'react';

type Props = {
    data: string
}

const Description = ({ data }: Props) => {
    return (
        <ul>
            {data.split('- ').map((d, index) => (
                <li key={index}>{d.trim()}</li>
            ))}
        </ul>
    )
}

export default Description;
