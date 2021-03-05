import React, {FunctionComponent} from 'react';

type Props = {
    data: string[]
}

const BulletedList = ({ data }: Props) => (
    <ul className="mt-12">
        {data.map((d, index) => {
            if (!d?.length) return '';

            return (
                <li
                    key={index}
                    className="flex items-start mb-4 leading-loose last:mb-0">
                    <i className="w-2 h-2 mt-3 mr-3 rounded-full flex-2 bg-teal-light"></i>
                    {d}
                </li>
            )
        })}
    </ul>
)

export default BulletedList;
