import React, { FunctionComponent } from 'react';

const buildClass = color => `bg-${color}-light text-${color} border-${color}`;
const greenLang = buildClass('lime');
const redLang = buildClass('ruby');
const blueLang = buildClass('teal');
const pinkLang = buildClass('pink');
const purpleLang = buildClass('purple');
const yellowLang = 'bg-yellow-light text-yellow-dark border-yellow-dark';

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
    Webpack: blueLang,
    Docker: blueLang,
    SCSS: pinkLang,
    AWS: yellowLang,
    'Gitlab CI/CD': yellowLang,
    Liquid: purpleLang,
}

type Props = {
    tagType: string
}

const Tag: FunctionComponent<Props> = ({ children, tagType }) => {
    let className = 'mr-2 text-xs tracking-wide uppercase border-2 p-tag last:mr-0 rounded-md ';
    if (langMap[tagType]) className += langMap[tagType]
    else className += blueLang

    return (
        <small className={className}>{children}</small>
    )
}

export default Tag;
