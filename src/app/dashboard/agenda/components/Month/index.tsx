import { Dayjs } from 'dayjs';
import Day from '../Day';
import React from 'react';

type MonthProps = {
  month: Dayjs[][];
};

export default function Month({ month }: MonthProps) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
