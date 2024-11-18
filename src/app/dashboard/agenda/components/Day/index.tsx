import { Dayjs } from 'dayjs';

type DayProps = {
  day: Dayjs;
};

export default function Day({ day }: DayProps) {
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        <p className="text-sm mt-1">{day.format('ddd')}</p>
        <p className="text-sm p-1 text-center">{day.format('DD')}</p>
      </header>
    </div>
  );
}
