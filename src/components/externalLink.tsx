import React, { FunctionComponent } from 'react';
import StyledLink from './styled-link';

type Props = {
    link: string
}

const ExternalLink: FunctionComponent<Props> = ({ link, children }) => (
    <StyledLink href={link}>{children}</StyledLink>
)

export default ExternalLink;
