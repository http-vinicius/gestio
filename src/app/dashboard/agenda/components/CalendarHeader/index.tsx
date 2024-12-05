import { useContext } from 'react';

import GlobalContext from '@/Context/GlobalContext';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../../../../public/logo.svg';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevIndex = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <header className="pb-2 px-4 flex items-center">
      <Image src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendario</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Hoje
      </button>
      <button onClick={handlePrevIndex}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {capitalizeFirstLetter(
          dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')
        )}
      </h2>
    </header>
  );
}
