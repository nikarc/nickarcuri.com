import React, {FunctionComponent} from 'react';

type Props = {
    href: string
}

const StyledLink: FunctionComponent<Props> = ({ children, href }) => (
    <a
        className="font-normal capitalize mr-2.5 last:mr-0 border-b-2 border-dotted text-teal-light hover:opacity-70 transition-opacity text-sm px-1 tracking-widest"
        href={href}>
        {children}
    </a>
)

export default StyledLink;
