import React, { FunctionComponent } from 'react';

type Props = {
    className?: string
    link: string
}

const ExternalLink: FunctionComponent<Props> = ({ link, children, className }) => (
    <a
        className={className || ''}
        target="_blank"
        rel="noopener"
        href={link}>{children}</a>
)

export default ExternalLink;
