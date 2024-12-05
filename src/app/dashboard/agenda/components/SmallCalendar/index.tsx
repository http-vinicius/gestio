import GlobalContext from '@/Context/GlobalContext';
import dayjs, { Dayjs } from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import getMonth from '../utils';

export default function SmallCalendar() {
  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
    smallCalendarMonth,
  } = useContext(GlobalContext);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }, [currentMonthIdx]);

  const handleNextMonth = useCallback(() => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }, [currentMonthIdx]);

  const getDayClass = useCallback((day: Dayjs) => {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currentDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currentDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }, [daySelected]);

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <button onClick={handlePrevMonth}>
          <span className="cursor-pointer text-gray-600">
            <ChevronLeft className="max-h-6" />
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="cursor-pointer text-gray-600">
            <ChevronRight />
          </span>
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format('dddd').charAt(0).toUpperCase()}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${getDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
