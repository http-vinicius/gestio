'use client';

import { Event } from '@/Context/ContextWrapper/utils';
import GlobalContext from '@/Context/GlobalContext';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useContext, useEffect, useState } from 'react';

type DayProps = {
  day: Dayjs;
  rowIdx: number;
};

export default function Day({ day, rowIdx }: DayProps) {
  const [dayEvents, setDayEvents] = useState<Event[]>([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = useCallback(() => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }, [day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents?.map((evt, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`${evt.color} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
            >
              {evt.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
