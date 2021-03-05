import React, {FunctionComponent} from 'react';

type Props = {
    href: string
}

const StyledLink: FunctionComponent<Props> = ({ children, href }) => (
    <a
        className="font-thin capitalize mr-2.5 last:mr-0 border-b-2 border-dotted text-teal-light hover:opacity-70 transition-opacity text-sm px-1"
        href={href}>
        {children}
    </a>
)

export default StyledLink;
