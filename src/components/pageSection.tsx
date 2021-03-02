import React, {FunctionComponent} from 'react'

const PageSection: FunctionComponent = ({ children }) => {
    return (
        <section className="mt-24">
            {children}
        </section>
    )
};

export default PageSection
