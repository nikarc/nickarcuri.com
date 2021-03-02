import React, { FunctionComponent } from 'react';

const greenLang = 'bg-lime-light text-lime border-lime';
const redLang = 'bg-ruby-light text-ruby border-ruby';
const blueLang = 'bg-accentBlue-light text-accentBlue border-accentBlue';

export type TagLang = {
    [key: string]: string
}

const langMap = {
    Javascript: greenLang,
    NodeJS: greenLang,
    Shopify: greenLang,
    VueJS: greenLang,
    Ruby: redLang,
    PHP: redLang,
    React: blueLang,
    Typescript: blueLang,
}

type Props = {
    tagType: string
}

const Tag: FunctionComponent<Props> = ({ children, tagType }) => {
    let className = 'text-xs tracking-wide p-tag uppercase mr-2 border-2 last:mr-0 rounded-md ';
    if (langMap[tagType]) className += langMap[tagType]

    return (
        <small className={className}>{children}</small>
    )
}

export default Tag;
