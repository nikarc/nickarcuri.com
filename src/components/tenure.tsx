import React from 'react';

type Props = {
    startDate: string
    endDate?: string
}

const Tenure = ({ startDate, endDate }: Props) => {
    const options = { month: 'short', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    let endMonth: string
    let endYear: string;

    const [
        { value: startMonth },,
        { value: startYear }
    ] = formatter.formatToParts(new Date(startDate));

    if (endDate) {
        const [
            { value: _endMonth },,
            { value: _endYear }
        ] = formatter.formatToParts(new Date(endDate))
        endMonth = _endMonth;
        endYear = _endYear;
    }

    return (
        <span>{`${startMonth} ${startYear}`} - {endDate ? `${endMonth} ${endYear}` : 'Current'}</span>
    )
}

export default Tenure;
