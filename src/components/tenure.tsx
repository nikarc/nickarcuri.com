import React from 'react';
import moment from 'moment';

type Props = {
    startDate: string
    endDate?: string
}

const Tenure = ({ startDate, endDate }: Props) => {
    const formatString: string = 'MMM YYYY';

    const startDateString: string = moment(startDate).format(formatString);
    let endDateString: string = 'Current';

    if (endDate) {
        endDateString = moment(endDate).format(formatString);
    }

    return (
        <span className="text-center sm:text-left">{startDateString} - {endDateString}</span>
    )
}

export default Tenure;
