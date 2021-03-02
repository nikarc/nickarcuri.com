import React, { FunctionComponent } from 'react';

const greenLang = 'bg-lime-light text-lime border-lime';

export type TagLang = {
    [key: string]: string
}

const langMap = {
    Javascript: greenLang,
    NodeJS: greenLang,
    Shopify: greenLang,
    VueJS: greenLang,
}

type Props = {
    tagType: string
}

const Tag: FunctionComponent<Props> = ({ children, tagType }) => {
    let className = 'px-2 py-2 mr-2 border-2 last:mr-0 rounded-md ';
    if (langMap[tagType]) className += langMap[tagType]

    return (
        <small className={className}>{children}</small>
    )
}

export default Tag;
