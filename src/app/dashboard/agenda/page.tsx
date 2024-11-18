'use client';

import { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import getMonth from './components/utils';

export default function Agenda() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  console.log('AQUI', currentMonth);

  return (
    <div className="h-screen flex flex-columns">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
}
